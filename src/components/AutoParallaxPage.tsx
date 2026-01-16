import { ReactNode, Children, isValidElement, cloneElement, useMemo } from 'react';
import { ParallaxSection } from './ParallaxSection';

interface AutoParallaxPageProps {
  children: ReactNode;
  defaultSpeed?: number;
  speeds?: number[];
}

/**
 * Automatically wraps all <section> elements with ParallaxSection
 * Usage: Wrap your page content with <AutoParallaxPage>
 */
export function AutoParallaxPage({ 
  children, 
  defaultSpeed = 0.3,
  speeds = []
}: AutoParallaxPageProps) {
  let sectionIndex = 0;

  const processChildren = (children: ReactNode): ReactNode => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }

    const isSection =
  typeof child.type === 'string' &&
  child.type.toLowerCase() === 'section' &&
  !child.props?.className?.includes('no-parallax');


      // If it's a section, wrap it
      if (isSection) {
        const currentIndex = sectionIndex++;
        const speed = speeds[currentIndex] ?? defaultSpeed;
        
        return (
          <ParallaxSection key={currentIndex} index={currentIndex} speed={speed}>
            {child}
          </ParallaxSection>
        );
      }

      // Recursively process children
      if (child.props?.children) {
        return cloneElement(child, {
          ...child.props,
          children: processChildren(child.props.children),
        });
      }

      return child;
    });
  };

  const processedChildren = useMemo(() => processChildren(children), [children, defaultSpeed, speeds]);

  return <>{processedChildren}</>;
}
