import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

export const SkeletonText = styled(SkeletonBase)<{ width?: string; height?: string }>`
  height: ${({ height }) => height || '1.2rem'};
  width: ${({ width }) => width || '100%'};
  margin: 0.5rem 0;
`;

export const SkeletonCard = styled(SkeletonBase)`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const SkeletonImage = styled(SkeletonBase)<{ width?: string; height?: string }>`
  height: ${({ height }) => height || '200px'};
  width: ${({ width }) => width || '100%'};
  border-radius: 8px;
`;

export const SkeletonButton = styled(SkeletonBase)`
  height: 50px;
  width: 150px;
  border-radius: 4px;
`;

export const SkeletonTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  background: rgba(var(--cardBackground), 0.5);
`;

export const SkeletonFeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  background: rgba(var(--cardBackground), 0.5);
`;

export default SkeletonBase;