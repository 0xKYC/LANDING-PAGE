import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import ScrollAnimationWrapper from 'components/ScrollAnimationWrapper';

import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <ScrollAnimationWrapper animation="slideUp" duration={800}>
          <Heading>Zero-Knowledge Liveness Verification</Heading>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="slideUp" duration={800} delay={200}>
          <Description>
            We&apos;re building software that checks liveness, verifies if you are who you claim to be, and generates onchain attestations - all in zero knowledge so you stay completely private. Previously a for-profit company, we&apos;re now an open source project. Block bots and duplicate accounts while preserving your anonymity.
          </Description>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="slideUp" duration={800} delay={400}>
          <CustomButtonGroup>
            <Button
              href="https://github.com/0xkyc"
              target="_blank"
              rel="noreferrer"
            >
              Check Our Repo<span>&rarr;</span>
            </Button>
            <Button transparent={true} href="https://adamzasada.medium.com/0xkyc-open-sourcing-the-future-of-privacy-preserving-identity-verification-146922cbda94" target="_blank" rel="noreferrer">
              Read Our Story<span>&rarr;</span>
            </Button>
          </CustomButtonGroup>
        </ScrollAnimationWrapper>
      </Contents>

      <ImageContainer>
        <VideoFrame src="https://player.vimeo.com/video/884105169?h=0549e91407" title="Sunscreen video" allowFullScreen />
      </ImageContainer>
    </HeroWrapper>
  );
}
const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  min-height: 320px;
`;
const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 15rem;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
`;

const Contents = styled.div`
  max-width: 55rem;
  margin-right: 4.5rem;
  ${media('<=desktop')} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const Description = styled.h2`
  font-size: 1.7rem;
  opacity: 0.8;
  line-height: 1.6;
  font-weight: 400;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`;
