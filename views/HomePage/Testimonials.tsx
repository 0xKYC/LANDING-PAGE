import { Splide, SplideSlide } from '@splidejs/react-splide';
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import { Separator } from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/fixed/IS-logo-nobg.png',
    content: `Thrilled to partner with 0xKYC at Insert Stonks! Their robust identity verification system is a game-changer, ensuring only genuine players get the rewards. We're stepping up our platform's security while maintaining a fair gaming environment.
  0xKYC is unique because of their Proof of Uniqueness solution. It lets us verify user identities without sharing any personally identifiable information on-chain, truly respecting our players' privacy.
  No personal data is shared with Insert Stonks, as 0xKYC handles all verification and stores the results securely. Our partnership is a big leap towards a safer and fairer gaming future in the Web3 world. Here's to enhanced security and privacy with 0xKYC!`,
    href: 'https://www.insertstonks.io/',
    author: {
      name: 'Przemysław Wierzbicki',
      title: 'Visionary Officer and Founder',
      avatarUrl: '/testimonials/is-ceo.jpg',
    },
    width: 170,
    height: 42,
  },
  {
    companyLogoUrl: '/fixed/lomads.png',
    content: `At Lomads, we take compliance and security very seriously. That's why we're excited to partner with 0xKYC to offer our customers an easy way to verify each contributor's uniqueness within their organization. This helps ensure that funds aren't sent to sanctioned individuals and keeps the organisation compliant. This service will be available through Soulbound tokens launched on our platform, and we're proud to offer one of the most reliable and user-friendly solutions out there with 0xKYC.`,
    href: 'https://www.lomads.xyz/',
    author: {
      name: 'Nishant Bhaskar',
      title: 'CEO and Co-Founder',
      avatarUrl: '/testimonials/lomads-ceo.jpeg',
    },
    width: 220,
    height: 32,
  },
  {
    title: 'Hashup',
    companyLogoUrl: '/hashup.webp',
    content: `0xKYC is one of the best crypto projects to emerge recently in our region. A common KYC infrastructure solution for decentralized applications is badly needed, and I believe this project has a chance to stir things up in this sphere.`,
    href: 'https://hashup.it/',
    author: {
      name: 'Szymon Jankowski',
      title: 'CEO',
      avatarUrl: '/testimonials/hashup-ceo.jpg',
    },
    width: 42,
    height: 42,
  },
];

export default function Testimonials() {
  return (
    <>
      <Separator />
      <Title style={{ margin: 0 }}>What our clients say</Title>
      <TestimonialsWrapper>
        <StyledSplide options={{ rewind: true }}>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SplideSlide key={idx}>
              <TestimonialCard>
                <Link href={singleTestimonial.href} target="_blank" rel="noreferrer">
                  <Box>
                    <NextImage
                      src={singleTestimonial.companyLogoUrl}
                      alt={`${singleTestimonial.author.name}'s company logo`}
                      width={singleTestimonial.width}
                      height={singleTestimonial.height}
                    />
                    {singleTestimonial.title && singleTestimonial.title}
                  </Box>
                </Link>
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={42} height={42} />
                  </AuthorImageContainer>

                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SplideSlide>
          ))}
        </StyledSplide>
      </TestimonialsWrapper>
      <Separator />
    </>
  );
}
const StyledSplide = styled(Splide)`
  .splide__pagination__page {
    background-color: gray;
  }

  .splide__pagination__page.is-active {
    background-color: rgb(251, 115, 36);
  }
`;

const Link = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TestimonialsWrapper = styled(Container)`
  position: relative;
  text-align: center;
  padding-bottom: 0rem;
  margin-top: 7rem !important;
  padding: 0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.1;
  padding: 0 1rem;
  letter-spacing: -0.03em;

  ${media('<=phone')} {
    font-size: 3.5rem;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 3rem;
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 1.6rem;
  font-style: italic;
  max-width: 65%;
  ${media('<=desktop')} {
    max-width: 85%;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
