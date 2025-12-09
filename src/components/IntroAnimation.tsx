import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Work showcase items for mosaic
  const workItems = [
    { icon: '{ }', label: 'Code', color: '#2663FF' },
    { icon: '◈', label: 'AI', color: '#00F6FF' },
    { icon: '⬡', label: 'Data', color: '#B794F6' },
    { icon: '◉', label: 'ML', color: '#2663FF' },
    { icon: '⟁', label: 'API', color: '#00F6FF' },
    { icon: '◇', label: 'Web', color: '#B794F6' },
    { icon: '⬢', label: 'Bot', color: '#2663FF' },
    { icon: '△', label: 'Dev', color: '#00F6FF' },
  ];

  // Enhanced beep sound generator with electronic feel
  const playBeep = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, []);

  // Play explosion sound effect
  const playExplosionSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    
    // Create noise for explosion
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
    
    // Add bass hit
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.frequency.setValueAtTime(80, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.2);
    oscGain.gain.setValueAtTime(0.4, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  }, []);

  // Particle explosion canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    const colors = ['#2663FF', '#00F6FF', '#B794F6', '#ffffff'];

    const createExplosion = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      
      for (let i = 0; i < 150; i++) {
        const angle = (Math.PI * 2 * i) / 150 + Math.random() * 0.5;
        const speed = 5 + Math.random() * 15;
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          maxLife: 0.5 + Math.random() * 0.5,
        });
      }
    };

    let explosionTriggered = false;

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Trigger explosion at phase 2
      if (phase >= 2 && !explosionTriggered) {
        createExplosion();
        explosionTriggered = true;
      }

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  // Phase progression - 5 seconds total
  useEffect(() => {
    // Phase 0: Black screen (0-0.3s)
    // Phase 1: Name tracing (0.3-1.5s)
    // Phase 2: Convergence & explosion (1.5-2.5s)
    // Phase 3: Mosaic reveal (2.5-3.5s)
    // Phase 4: Title card (3.5-5s)
    
    const timer1 = setTimeout(() => {
      setPhase(1);
      playBeep(440, 0.1, 'sine');
    }, 300);

    const timer2 = setTimeout(() => {
      setPhase(2);
      playBeep(880, 0.05, 'square');
      playExplosionSound();
    }, 1500);

    const timer3 = setTimeout(() => {
      setPhase(3);
      playBeep(660, 0.1, 'triangle');
    }, 2500);

    const timer4 = setTimeout(() => {
      setPhase(4);
      playBeep(1320, 0.15, 'sine');
    }, 3500);

    const exitTimer = setTimeout(() => {
      playBeep(1760, 0.3, 'sine', 0.1);
      setShowContent(false);
    }, 4700);

    const completeTimer = setTimeout(onComplete, 5200);

    return () => {
      [timer1, timer2, timer3, timer4, exitTimer, completeTimer].forEach(clearTimeout);
    };
  }, [onComplete, playBeep, playExplosionSound]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            filter: 'blur(20px) brightness(2)',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Particle Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10"
          />

          {/* Scanlines Overlay */}
          <div className="absolute inset-0 pointer-events-none z-50 opacity-30 scanlines" />

          {/* Grid Background */}
          <motion.div 
            className="absolute inset-0 z-5"
            animate={{
              opacity: phase >= 1 ? 0.1 : 0,
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(220 100% 57% / 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(220 100% 57% / 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </motion.div>

          {/* Phase 1: Neon Name Tracing */}
          <AnimatePresence>
            {phase >= 1 && phase < 3 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <svg 
                  viewBox="0 0 600 120" 
                  className="w-[90vw] max-w-4xl h-auto"
                  style={{ filter: 'drop-shadow(0 0 20px #00F6FF) drop-shadow(0 0 40px #2663FF)' }}
                >
                  {/* SAFWAN Text Path */}
                  <motion.text
                    x="50%"
                    y="60"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-bold"
                    style={{
                      fontSize: '72px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fill: 'none',
                      stroke: 'url(#neonGradient)',
                      strokeWidth: 2,
                    }}
                    initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    animate={{ 
                      strokeDashoffset: phase >= 2 ? 0 : 0,
                      strokeDasharray: 1000,
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  >
                    SAFWAN
                  </motion.text>
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2663FF" />
                      <stop offset="50%" stopColor="#00F6FF" />
                      <stop offset="100%" stopColor="#B794F6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Glowing orb at center for convergence */}
                {phase >= 2 && (
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-secondary"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ 
                      scale: [0, 3, 50],
                      opacity: [1, 1, 0],
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                      boxShadow: '0 0 60px #00F6FF, 0 0 120px #2663FF',
                    }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 3: Mosaic Grid with Work Clips */}
          <AnimatePresence>
            {phase >= 3 && phase < 4 && (
              <motion.div
                className="absolute inset-0 z-20 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="h-full grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4"
                  style={{ perspective: '1000px' }}
                >
                  {workItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative rounded-lg overflow-hidden glass-strong flex items-center justify-center"
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        rotateX: Math.random() * 90 - 45,
                        rotateY: Math.random() * 90 - 45,
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                      }}
                      transition={{ 
                        delay: i * 0.05,
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      style={{
                        boxShadow: `0 0 30px ${item.color}40`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      {/* Glitch overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br opacity-20"
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}40 0%, transparent 100%)` 
                        }}
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 0.2, repeat: 3 }}
                      />
                      
                      {/* Content */}
                      <div className="text-center z-10">
                        <motion.span 
                          className="text-3xl md:text-5xl block mb-2"
                          style={{ color: item.color }}
                          animate={{
                            textShadow: [
                              `0 0 10px ${item.color}`,
                              `0 0 30px ${item.color}`,
                              `0 0 10px ${item.color}`,
                            ],
                          }}
                          transition={{ duration: 0.3, repeat: 2 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="text-xs md:text-sm font-mono text-muted-foreground">
                          {item.label}
                        </span>
                      </div>

                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        initial={{ y: '-100%' }}
                        animate={{ y: '200%' }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4: Final Title Card */}
          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute w-96 h-96 rounded-full blur-3xl"
                  style={{ 
                    background: 'radial-gradient(circle, hsl(220 100% 57% / 0.4) 0%, transparent 70%)' 
                  }}
                  animate={{
                    scale: [1, 1.3, 1.1],
                    opacity: [0.5, 0.8, 0.6],
                  }}
                  transition={{ duration: 1.5 }}
                />

                {/* Main Name */}
                <motion.h1
                  className="text-5xl md:text-8xl font-bold tracking-tight relative"
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="relative inline-block">
                    <span className="text-gradient-primary">SAFWAN</span>
                    {/* Glitch layers */}
                    <motion.span
                      className="absolute top-0 left-0 text-primary opacity-50"
                      animate={{
                        x: [0, -3, 3, 0],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 0.1, repeat: 5 }}
                      style={{ clipPath: 'inset(30% 0 40% 0)' }}
                    >
                      SAFWAN
                    </motion.span>
                    <motion.span
                      className="absolute top-0 left-0 text-secondary opacity-50"
                      animate={{
                        x: [0, 3, -3, 0],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 0.1, repeat: 5, delay: 0.05 }}
                      style={{ clipPath: 'inset(60% 0 10% 0)' }}
                    >
                      SAFWAN
                    </motion.span>
                  </span>
                </motion.h1>

                {/* Professional Title */}
                <motion.div
                  className="mt-6 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.p
                    className="text-lg md:text-2xl font-light tracking-[0.3em] text-muted-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    GENAI DEVELOPER
                  </motion.p>
                </motion.div>

                {/* Decorative line */}
                <motion.div
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />

                {/* Subtitle */}
                <motion.p
                  className="mt-4 text-sm font-mono text-muted-foreground/60 tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  DATA SCIENTIST • HACKATHON WINNER
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vignette Effect */}
          <div 
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
            }}
          />

          {/* Corner decorations */}
          <motion.div 
            className="absolute top-6 left-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <div className="w-8 h-8 border-l-2 border-t-2 border-primary/50" />
          </motion.div>
          <motion.div 
            className="absolute top-6 right-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <div className="w-8 h-8 border-r-2 border-t-2 border-primary/50" />
          </motion.div>
          <motion.div 
            className="absolute bottom-6 left-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <div className="w-8 h-8 border-l-2 border-b-2 border-primary/50" />
          </motion.div>
          <motion.div 
            className="absolute bottom-6 right-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <div className="w-8 h-8 border-r-2 border-b-2 border-primary/50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
