import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per window
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation
const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES = 20;
const VALID_ROLES = ['user', 'assistant'];

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; messages?: ChatMessage[] } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: 'Messages must be an array' };
  }
  
  if (messages.length === 0) {
    return { valid: false, error: 'Messages array cannot be empty' };
  }
  
  if (messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Too many messages. Maximum is ${MAX_MESSAGES}` };
  }
  
  const validatedMessages: ChatMessage[] = [];
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    
    if (!msg || typeof msg !== 'object') {
      return { valid: false, error: `Message at index ${i} must be an object` };
    }
    
    if (typeof msg.role !== 'string' || !VALID_ROLES.includes(msg.role)) {
      return { valid: false, error: `Invalid role at index ${i}. Must be 'user' or 'assistant'` };
    }
    
    if (typeof msg.content !== 'string') {
      return { valid: false, error: `Content at index ${i} must be a string` };
    }
    
    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }
    
    validatedMessages.push({ role: msg.role, content: msg.content });
  }
  
  return { valid: true, messages: validatedMessages };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    if (isRateLimited(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please wait a moment before trying again.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    
    // Validate messages
    const validation = validateMessages(body.messages);
    if (!validation.valid) {
      console.log(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const messages = validation.messages!;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant for Safwan Ahmad's portfolio website. You help visitors learn about Safwan's experience, skills, and projects.

About Safwan Ahmad:
- Role: AI Engineer, Full-Stack Developer, and Product Builder
- Location: Faisalabad, Pakistan
- Email: safwanahmadsaffi836@gmail.com
- Current Status: Available for freelance projects, collaborations, and full-time opportunities

Skills & Expertise:
- AI & Machine Learning: TensorFlow, PyTorch, Hugging Face, LangChain, Computer Vision, NLP
- Languages & Frameworks: Python, JavaScript/TypeScript, React, Next.js, Node.js, FastAPI
- Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, CI/CD
- Databases: PostgreSQL, MongoDB, Redis, Pinecone
- Tools: Git, Jupyter, VS Code, Postman, Linux

Professional Experience:
- Experienced in building intelligent products and AI-powered applications
- Creates 3D-interactive web experiences
- Develops fast, scalable systems
- Works on full-stack development from frontend to backend

Projects Focus:
- AI/ML applications
- Interactive 3D web experiences
- Full-stack web applications
- Cloud-native solutions

Answer questions about Safwan's experience, skills, projects, and availability. Be helpful, professional, and enthusiastic. If asked about specific project details that aren't provided, suggest the visitor contact Safwan directly via email.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
