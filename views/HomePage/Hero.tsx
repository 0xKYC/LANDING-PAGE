import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';

import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <Heading>Block bots and duplicate-account users</Heading>

        <Description>
          Verify if your users are real and have the amount of accounts they claim to have with our Sunscreen check.
        </Description>
        <CustomButtonGroup>
          <Button href="https://docsend.com/view/fu6m2ntk2qiivi4g" target="_blank" rel="noreferrer">
            See our Product Offering<span>&rarr;</span>
          </Button>
          <Button transparent={true} href="https://calendly.com/adamzasada" target="_blank" rel="noreferrer">
            Book a demo<span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>

      <ImageContainer>
        <VideoFrame
          src="https://www.loom.com/embed/5f260f8fcdd44461a1f61117f7ea1e8e?sid=0a148de9-78e3-4a5d-957d-73e3289cf418"
          title="Sunscreen video"
          allowFullScreen
        />
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=QHm8tHxXlN4&t" title="0xKYC video" /> */}
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
