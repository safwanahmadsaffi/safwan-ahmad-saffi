import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [msgIndex, setMsgIndex] = useState(0);

  const loadingMessages = [
    "Initializing Portfolio...",
    "Loading AI Models...",
    "Synthesizing Neural Networks...",
    "Connecting to the Grid...",
    "Safwan Ahmad Saffi",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 12000), 60);
    const colors = ['#2663FF', '#00F6FF', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.fillStyle = '#0D0D0D';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.05;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const currentSize = p.size + Math.sin(p.life) * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.4 + Math.sin(p.life * 2) * 0.2;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectDist = 150;

          if (dist < connectDist) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.1 * (1 - dist / connectDist);
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50"
      />

      <div className="relative z-10 flex flex-col items-center justify-center p-12 max-w-md w-full">
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
          <div 
            className="absolute inset-2 border-r-2 border-secondary rounded-full animate-spin" 
            style={{ animationDirection: 'reverse', animationDuration: '3s' }}
          ></div>
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-slow"></div>
          <Loader2 className="w-10 h-10 text-foreground animate-spin relative z-10" />
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gradient-primary animate-pulse">
            Building Interface
          </h2>

          <div className="h-8 flex items-center justify-center overflow-hidden relative">
            <p
              key={msgIndex}
              className="text-muted-foreground font-mono text-sm animate-fade-in"
            >
              {loadingMessages[msgIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
