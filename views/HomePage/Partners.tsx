import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  { name: 'OKX_logo-new.png', alt: 'OKX' },
  { name: 'lomads-white-new.png', alt: 'OKX' },
  { name: 'ov-new.png', alt: 'OKX' },
  { name: 'new-order.jpg', alt: 'New Order DAO', width: 300 },
  { name: 'cryptum-logo-new.png', alt: 'Cryptum' },
  { name: 'identdefi-new.png', alt: 'IdentDefi' },
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official partners with</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo.name}>
            <NextImage src={'/partners/' + logo.name} alt={logo.alt} width={logo.width ? logo.width : 380} height={64} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

const Title = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
