import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export const RevealOnScroll: React.FC<Props> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    if (!isVisible) {
        switch(direction) {
            case 'up': return 'translate-y-16';
            case 'down': return '-translate-y-16';
            case 'left': return '-translate-x-16'; // Left entry implies coming from left
            case 'right': return 'translate-x-16'; // Right entry implies coming from right
            default: return 'translate-y-16';
        }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-luxury transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
