import { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  index: number;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ 
  children, 
  index, 
  speed = 0.3,
  className = '' 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ translateY: 0, scale: 1, opacity: 1, zIndex: 10 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate section's position relative to viewport center
      const viewportCenter = scrollY + windowHeight / 2;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const distanceFromCenter = viewportCenter - sectionCenter;
      
      // Normalize the distance (0 when centered, increases as you scroll away)
      const normalizedDistance = distanceFromCenter / (windowHeight * 0.8);
      
      // Only apply parallax if section is tall enough (prevents blank spaces for small sections)
      const isSmallSection = sectionHeight < windowHeight * 0.5;
      
      // Parallax transform - sections move at different speeds creating overlap
      // Reduce effect for small sections to prevent blank spaces
      const parallaxMultiplier = isSmallSection ? 0.3 : 1;
      const translateY = normalizedDistance * speed * 100 * parallaxMultiplier;
      
      // Scale effect for depth (sections closer to center are larger)
      // Less scale for small sections
      const scaleAmount = isSmallSection ? 0.05 : 0.12;
      const scale = 1 - Math.abs(normalizedDistance) * scaleAmount;
      
      // Opacity based on position (fade sections that are far from center)
      // Less opacity change for small sections
      const opacityAmount = isSmallSection ? 0.2 : 0.5;
      const opacity = Math.max(0.7, 1 - Math.abs(normalizedDistance) * opacityAmount);
      
      // Z-index for overlapping (higher when closer to viewport center)
      // Sections in the center get higher z-index, creating overlap effect
      const zIndex = Math.floor(100 - Math.abs(normalizedDistance) * 70);
      
      setTransform({
        translateY,
        scale: Math.max(0.95, Math.min(1, scale)),
        opacity: Math.max(0.7, Math.min(1, opacity)),
        zIndex: Math.max(10, Math.min(100, zIndex)),
      });
    };

    // Use requestAnimationFrame for smoother performance
    let rafId: number;
    const scrollHandler = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${transform.translateY}px) scale(${transform.scale})`,
        opacity: transform.opacity,
        zIndex: transform.zIndex,
        position: 'relative',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </section>
  );
}
