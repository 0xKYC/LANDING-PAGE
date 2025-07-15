import { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  duration?: number;
  delay?: number;
  threshold?: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animations = {
  fadeIn,
  slideUp,
  slideLeft,
  slideRight,
  scaleIn,
};

const AnimatedWrapper = styled.div<{
  $isVisible: boolean;
  $animation: keyof typeof animations;
  $duration: number;
  $delay: number;
}>`
  opacity: 0;
  
  ${({ $isVisible, $animation, $duration, $delay }) =>
    $isVisible &&
    css`
      animation: ${animations[$animation]} ${$duration}ms ease-out ${$delay}ms forwards;
    `}
`;

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeIn',
  duration = 600,
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationWrapperProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  return (
    <AnimatedWrapper
      ref={elementRef}
      $isVisible={isVisible}
      $animation={animation}
      $duration={duration}
      $delay={delay}
    >
      {children}
    </AnimatedWrapper>
  );
}