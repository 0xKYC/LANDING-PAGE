import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

// import { A11y, Autoplay, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/fixed/lomads.png',
    content: `At Lomads, we take compliance and security very seriously. That's why we're excited to partner with 0xKYC to offer our customers an easy way to verify each contributor's uniqueness within their organization. This helps ensure that funds aren't sent to sanctioned individuals and keeps the organisation compliant. This service will be available through Soulbound tokens launched on our platform, and we're proud to offer one of the most reliable and user-friendly solutions out there with 0xKYC.`,
    author: {
      name: 'Nishant Bhaskar',
      title: 'CEO and Co-Founder',
      avatarUrl: '/testimonials/lomads-ceo.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <Title>What our clients says</Title>
      <TestimonialsWrapper>
        {TESTIMONIALS.map((singleTestimonial, idx) => (
          <TestimonialCard key={idx}>
            <NextImage
              src={singleTestimonial.companyLogoUrl}
              alt={`${singleTestimonial.author.name}'s company logo`}
              width={220}
              height={32}
            />
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
        ))}
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;
  text-align: center;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 7rem;
  padding: 0 1rem;
  letter-spacing: -0.03em;

  ${media('<=phone')} {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 1.4rem;
  font-style: italic;
  max-width: 65%;

  ${media('<=desktop')} {
    max-width: 90%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
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
