import { ReactNode } from 'react';
import { ParallaxSection } from './ParallaxSection';

interface ParallaxPageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Simple wrapper that provides the parallax container
 * Pages should wrap their sections with ParallaxSection manually
 */
export function ParallaxPageWrapper({ 
  children, 
  className = '' 
}: ParallaxPageWrapperProps) {
  return (
    <main className={`parallax-container ${className}`}>
      {children}
    </main>
  );
}

/**
 * Helper function to wrap sections with parallax
 * Usage: wrapSections([section1, section2, section3], [0.2, 0.25, 0.3])
 */
export function wrapSections(
  sections: ReactNode[], 
  speeds?: number[]
): ReactNode[] {
  const defaultSpeed = 0.3;
  return sections.map((section, index) => (
    <ParallaxSection 
      key={index} 
      index={index} 
      speed={speeds?.[index] ?? defaultSpeed}
    >
      {section}
    </ParallaxSection>
  ));
}
