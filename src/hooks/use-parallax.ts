import { useEffect, useState } from 'react';

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setWindowHeight(window.innerHeight);
    };

    // Set initial values
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { scrollY, windowHeight };
}

export function useParallaxTransform(
  index: number,
  speed: number = 0.5,
  offset: number = 0
) {
  const { scrollY, windowHeight } = useParallax();
  
  // Calculate the section's position relative to viewport
  const sectionTop = index * windowHeight;
  const sectionBottom = sectionTop + windowHeight;
  const scrollProgress = (scrollY - sectionTop + offset) / windowHeight;
  
  // Parallax transform based on scroll position
  const translateY = scrollProgress * windowHeight * speed;
  
  // Opacity based on scroll position (fade in/out)
  const opacity = Math.max(0, Math.min(1, 1 - Math.abs(scrollProgress - 0.5) * 2));
  
  // Scale effect for depth
  const scale = 1 - Math.abs(scrollProgress - 0.5) * 0.1;
  
  return {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity: opacity > 0.3 ? opacity : 0.3,
    zIndex: Math.floor(100 - Math.abs(scrollProgress - 0.5) * 50),
  };
}
