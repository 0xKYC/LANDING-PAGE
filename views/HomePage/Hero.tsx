import Image from 'next/image';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';

import { Anchor } from 'components/Link';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <Heading>Block bots and multiple users</Heading>

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
        <StyledLink
          rel="noreferrer"
          target="_blank"
          href="https://onfido.com/press-release/0xkyc-partners-with-onfido-to-provide-fraud-protection-protocols-on-blockchain-and-in-the-metaverse/"
        >
          <Image src="/onfido-0xkyc.webp" width={800} height={300} objectFit="cover" alt="Onfido partnership with 0xkyc" />
        </StyledLink>

        <P>
          “The solution that 0xKYC has created using Onfido’s technology is hugely innovative, by creating a token for cleared users, 0xKYC
          has established a level of privacy that will boost security on Web3 and the Metaverse.” - Onfido’s CPO Yuelin Li.{' '}
          <Anchor
            rel="noreferrer"
            target="_blank"
            href="https://onfido.com/press-release/0xkyc-partners-with-onfido-to-provide-fraud-protection-protocols-on-blockchain-and-in-the-metaverse/"
            style={{ marginRight: '0.4rem' }}
          >
            Read more{' '}
          </Anchor>
          <Image src="/external-link.svg" width={10} height={10} alt="" />
        </P>
      </ImageContainer>
    </HeroWrapper>
  );
}

const P = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin: 0.5rem;

  @media screen and (min-width: 975px) {
    margin: 1rem 10rem;
  }
  @media screen and (min-width: 1025px) {
    margin: 0.5rem 0;
  }
`;
const StyledLink = styled.a`
  color: black;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-width: 70rem;
  margin-right: 5rem;
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
