import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import NewsletterModal from 'components/Modal';
import Link from 'components/Link';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <Heading>Unlock the power of privacy</Heading>

        <Description>
          Our revolutionary solution allows DeFi protocols and DAOs to verify their users without compromising personal information
        </Description>
        <CustomButtonGroup>
          <Button href="https://app.0xkyc.id/" target="_blank" rel="noreferrer">
            Discover 0xKYC<span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <YoutubeVideo url="https://www.youtube.com/watch?v=OSgYUkuCjss&t=333s" title="Demo app" />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 15rem;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 70rem;
  margin-right: 5rem;
  ${media('<=desktop')} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 5rem;
  }
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

const Heading = styled.h1`
  font-size: 6.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
