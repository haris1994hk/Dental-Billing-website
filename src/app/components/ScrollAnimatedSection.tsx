'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'slideUp' | 'slideDown' | 'fadeIn';
}

export const ScrollAnimatedSection = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
}: ScrollAnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    zoomIn: 'animate-zoom-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    fadeIn: 'animate-fade-in',
  };

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? animationClasses[animation] : 'opacity-0'}
        transition-all duration-700 ease-out
        ${className}
      `}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

// Staggered children animation (for multiple items)
interface ScrollAnimatedItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'slideUp' | 'slideDown' | 'fadeIn';
}

export const ScrollAnimatedItem = ({
  children,
  className = '',
  index = 0,
  animation = 'fadeInUp',
}: ScrollAnimatedItemProps) => {
  return (
    <ScrollAnimatedSection
      className={className}
      delay={index * 100}
      animation={animation}
    >
      {children}
    </ScrollAnimatedSection>
  );
};
