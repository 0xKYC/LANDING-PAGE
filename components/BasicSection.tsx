import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
  href?: string;
}

export default function BasicSection({ imageUrl, title, overTitle, reversed, children, href }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper reversed={reversed}>
      {href ? (
        <ImageContainer>
          <a rel="noreferrer" target="_blank" href={href}>
            <NextImage src={imageUrl} alt={title} layout="fill" objectFit="contain" />
          </a>
        </ImageContainer>
      ) : (
        <ImageContainer>
          <NextImage src={imageUrl} alt={title} layout="fill" objectFit="contain" />
        </ImageContainer>
      )}

      <ContentContainer>
        {/* <CustomOverTitle>{overTitle}</CustomOverTitle> */}
        <Title>{title}</Title>
        <RichText>{children as any}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

export const Title = styled.h3`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
    padding-bottom: 7rem;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
export const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};
  margin-top: 10rem;
  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
