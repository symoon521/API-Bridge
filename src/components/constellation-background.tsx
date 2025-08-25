
'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ConstellationBackgroundProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  maxDistance?: number;
}

const ConstellationBackground: React.FC<ConstellationBackgroundProps> = ({
  className,
  particleColor = 'rgba(255, 255, 255, 0.7)',
  lineColor = 'rgba(79, 70, 229, 0.2)',
  particleCount = 100,
  maxDistance = 120,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, particles: any[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach((p1) => {
      ctx.fillStyle = particleColor;
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p2) => {
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (distance < maxDistance) {
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - distance / maxDistance;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });
  }, [lineColor, maxDistance, particleColor]);

  const update = useCallback((ctx: CanvasRenderingContext2D, particles: any[]) => {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > ctx.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > ctx.canvas.height) p.vy *= -1;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const animate = () => {
      draw(ctx, particles);
      update(ctx, particles);
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw, update, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute top-0 left-0 w-full h-full -z-10', className)}
    />
  );
};

export default ConstellationBackground;
