import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';

import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <Heading>Unlock the power of privacy</Heading>

        <Description>
          Our revolutionary solution allows DeFi protocols and DAOs to verify their users without compromising personal information
        </Description>
        <CustomButtonGroup>
          <Button
            href="https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299"
            rel="noreferrer"
            target="_blank"
          >
            Documentation<span>&rarr;</span>
          </Button>
          {/* <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <VideoFrame
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/nRVhCr7Hz6c"
          title="Demo app"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoFrame>
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  margin-right: 5rem;
  ${media('<=desktop')} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 5rem;
  }
`;
const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
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

const Description = styled.p`
  font-size: 1.7rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
