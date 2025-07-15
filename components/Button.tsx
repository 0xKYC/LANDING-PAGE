import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : 'rgb(var(--primary))')};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: ${(p) => (p.transparent ? 'rgb(var(--text))' : 'rgb(var(--textSecondary))')};
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: ${(p) => (p.transparent ? '2px solid rgb(var(--primary))' : '2px solid rgb(var(--primary))')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  span {
    margin-left: 1rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.025) translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    ${(p) => p.transparent ? 
      'background: rgb(var(--primary)); color: rgb(var(--textSecondary));' : 
      'background: rgb(var(--primaryLight, var(--primary)));'
    }
    
    &::before {
      left: 100%;
    }

    span {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: scale(0.98) translateY(0);
  }
`;

export default Button;

export const SmallBtn = styled(Button)`
  padding: 1rem 1.4rem;
`;
export const DisabledBtn = styled('button')`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: darkgray;
  /* background: rgb(var(--primary)); */
  padding: 1.1rem 1.6rem;
  font-size: 1.2rem;
  color: rgb(var(--textSecondary));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  /* border: 2px solid rgb(var(--primary)); */
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: not-allowed;
  span {
    margin-left: 2rem;
  }
`;
