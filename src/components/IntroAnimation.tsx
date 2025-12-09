import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Beep sound generator
  const playBeep = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
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
    
    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, []);

  // Matrix rain effect
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

    const chars = 'SAFWAN01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#00F6FF';
      ctx.font = `${fontSize}px JetBrains Mono`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillStyle = Math.random() > 0.98 ? '#2663FF' : 'rgba(0, 246, 255, 0.8)';
        ctx.fillText(text, x, y);
        
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
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
  }, []);

  // Phase progression with beeps
  useEffect(() => {
    const phases: { delay: number; beep: [number, number, OscillatorType?] }[] = [
      { delay: 300, beep: [800, 0.1] },
      { delay: 800, beep: [1000, 0.1] },
      { delay: 1400, beep: [1200, 0.1] },
      { delay: 2000, beep: [600, 0.15] },
      { delay: 2600, beep: [1500, 0.2] },
      { delay: 3200, beep: [400, 0.1] },
      { delay: 4000, beep: [1800, 0.3, 'square'] },
    ];

    const timers = phases.map((p, i) => 
      setTimeout(() => {
        setPhase(i + 1);
        playBeep(p.beep[0], p.beep[1], p.beep[2] || 'sine');
      }, p.delay)
    );

    const exitTimer = setTimeout(() => {
      playBeep(2000, 0.4, 'sawtooth');
      setShowContent(false);
    }, 4800);

    const completeTimer = setTimeout(onComplete, 5500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, playBeep]);

  const glitchText = (text: string) => (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 text-secondary opacity-70 animate-glitch-1" 
        style={{ clipPath: 'inset(40% 0 0 0)' }}>{text}</span>
      <span className="absolute top-0 left-0 text-primary opacity-70 animate-glitch-2"
        style={{ clipPath: 'inset(0 0 60% 0)' }}>{text}</span>
    </span>
  );

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Matrix Rain Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-30"
          />

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none z-10 scanlines" />

          {/* CRT Flicker */}
          <div className="absolute inset-0 pointer-events-none z-20 crt-flicker" />

          {/* Grid Lines */}
          <div className="absolute inset-0 z-5">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-30 h-full flex flex-col items-center justify-center">
            
            {/* Boot Sequence */}
            <motion.div 
              className="absolute top-8 left-8 font-mono text-xs text-secondary/80 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {phase >= 1 && (
                <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  [OK] Initializing system...
                </motion.p>
              )}
              {phase >= 2 && (
                <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  [OK] Loading neural networks...
                </motion.p>
              )}
              {phase >= 3 && (
                <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  [OK] Connecting to mainframe...
                </motion.p>
              )}
              {phase >= 4 && (
                <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  [OK] Establishing secure connection...
                </motion.p>
              )}
              {phase >= 5 && (
                <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-primary">
                  [OK] Portfolio loaded successfully
                </motion.p>
              )}
            </motion.div>

            {/* Stats Display */}
            <motion.div 
              className="absolute top-8 right-8 font-mono text-xs text-muted-foreground text-right space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
            >
              <p>SYS: <span className="text-secondary">ONLINE</span></p>
              <p>CPU: <span className="text-primary">{phase >= 3 ? '98.7%' : '...'}</span></p>
              <p>MEM: <span className="text-primary">{phase >= 4 ? '16.4GB' : '...'}</span></p>
              <p>NET: <span className="text-secondary">{phase >= 5 ? 'CONNECTED' : '...'}</span></p>
            </motion.div>

            {/* Central Logo/Name */}
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-20 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Hexagon Frame */}
              {phase >= 3 && (
                <motion.div
                  className="absolute -inset-16 flex items-center justify-center"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                >
                  <svg viewBox="0 0 200 200" className="w-64 h-64 text-primary/30">
                    <motion.polygon
                      points="100,10 180,50 180,150 100,190 20,150 20,50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.div>
              )}

              {/* Main Initials */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: phase >= 2 ? 1 : 0, 
                  scale: phase >= 2 ? 1 : 0.5 
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
                  {glitchText('SA')}
                </h1>
              </motion.div>
            </div>

            {/* Name Reveal */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 4 ? 1 : 0 }}
            >
              <motion.h2
                className="text-2xl md:text-4xl font-bold text-gradient-primary tracking-wide"
                initial={{ y: 50 }}
                animate={{ y: phase >= 4 ? 0 : 50 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                SAFWAN AHMAD SAFFI
              </motion.h2>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 5 ? 1 : 0 }}
            >
              <motion.p
                className="font-mono text-sm md:text-base text-muted-foreground tracking-widest"
                initial={{ opacity: 0, letterSpacing: '0.5em' }}
                animate={{ 
                  opacity: phase >= 5 ? 1 : 0,
                  letterSpacing: phase >= 5 ? '0.3em' : '0.5em'
                }}
                transition={{ duration: 0.5 }}
              >
                GENAI DEVELOPER • DATA SCIENTIST
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(phase * 17, 100)}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              <p className="text-center mt-2 font-mono text-xs text-muted-foreground">
                {phase >= 6 ? 'READY' : `LOADING... ${Math.min(phase * 17, 100)}%`}
              </p>
            </motion.div>

            {/* Corner Decorations */}
            <div className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground/50">
              v2.0.25
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-xs text-muted-foreground/50">
              {new Date().toISOString().split('T')[0]}
            </div>
          </div>

          {/* Vignette */}
          <div 
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
