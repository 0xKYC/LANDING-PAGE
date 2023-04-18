import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import styled from 'styled-components';

import { media } from 'utils/media';

const PARTNER_LOGOS = [
  { name: 'mthrbrd.webp', alt: 'motherboard', href: 'https://www.motherboard.fi' },
  { name: 'blue.svg', alt: 'identdefi', href: 'https://www.blue.fi' },
  { name: 'OKX_logo-new.png', alt: 'okx', href: 'https://www.okx.com/web3' },
  { name: 'ov.png', alt: 'outlier ventures', href: 'https://outlierventures.io/' },
  { name: 'no-res.png', alt: 'new order', href: 'https://neworder.network/' },
  { name: 'scroll.png', alt: 'scroll', href: 'https://scroll.io/alpha/ecosystem' },
  { name: 'lomads.png', alt: 'lomads', href: 'https://www.lomads.xyz/' },
  { name: 'cryptum.png', alt: 'cryptum', href: 'https://cryptum.io/' },
  { name: 'codemonk.png', alt: 'codemonk', href: 'https://www.codemonk.ai/' },
  { name: 'chainalysis.png', alt: 'chainalysis', href: 'https://www.chainalysis.com/' },
  { name: 'onfido-logo.png', alt: 'onfido', href: 'https://onfido.com/' },
  { name: 'comply-logo.jpeg', alt: 'comply advantage', href: 'https://complyadvantage.com/' },
  { name: 'insert-stonks.png', alt: 'insert stonks', href: ' https://insertstonks.io/' },
];

export default function Partners() {
  return (
    <Wrapper>
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
            <a href={logo.href} target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>
              <img src={'/fixed/' + logo.name} alt={logo.alt} height="32px" />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Title = styled.h3`
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

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 15rem;
`;
