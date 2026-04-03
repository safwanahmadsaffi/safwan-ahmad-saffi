import { useEffect, useRef } from "react";

const ShootingStars = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";
      
      const startX = Math.random() * window.innerWidth * 0.8;
      const startY = Math.random() * window.innerHeight * 0.5;
      const duration = 1 + Math.random() * 1.5;
      const width = 60 + Math.random() * 100;
      
      const colors = [
        "linear-gradient(90deg, rgba(255,255,255,0.7), transparent)",
        "linear-gradient(90deg, rgba(168,130,255,0.6), transparent)",
        "linear-gradient(90deg, rgba(255,100,150,0.5), transparent)",
        "linear-gradient(90deg, rgba(100,200,255,0.5), transparent)",
      ];
      
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.width = `${width}px`;
      star.style.background = colors[Math.floor(Math.random() * colors.length)];
      star.style.animationDuration = `${duration}s`;
      
      container.appendChild(star);
      
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createStar, 400);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

export default ShootingStars;
