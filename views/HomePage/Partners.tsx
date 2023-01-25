import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import styled from 'styled-components';

import { media } from 'utils/media';

const PARTNER_LOGOS = [
  { name: 'cryptum.png', alt: 'cryptum' },
  { name: 'identdefi-new.png', alt: 'identdefi' },
  { name: 'no-res.png', alt: 'new order' },
  { name: 'OKX_logo-new.png', alt: 'okx' },
  { name: 'ov.png', alt: 'outlier ventures' },
  { name: 'lomads.png', alt: 'lomads' },
];

export default function Partners() {
  return (
    <div>
      <Title>offical partners with</Title>
      <Splide
        aria-label="Partners"
        options={{
          autoWidth: true,
          type: 'loop',
          gap: '35px',
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 1,
          perMove: 1,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 2,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {PARTNER_LOGOS.map((logo, idx) => (
          <SplideSlide key={idx}>
            <img src={'/fixed/' + logo.name} alt={logo.alt} height="32px" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

const Title = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.8;
  font-weight: bold;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;
