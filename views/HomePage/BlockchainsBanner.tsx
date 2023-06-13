import { Splide, SplideSlide } from '@splidejs/react-splide';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import styled from 'styled-components';

import { media } from 'utils/media';

const BLOCKCHAINS = [
  // {
  //   name: 'Polygon Mainnet (coming soon)',
  //   img: 'polygon.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
  {
    name: 'Polygon Mumbai',
    img: 'polygon.png',
    alt: 'polygon',
    href: 'https://mumbai.polygonscan.com/',
  },
  {
    name: 'Ethereum Goerli',
    img: 'ethereum-logo.png',
    alt: 'polygon',
    href: 'https://goerli.etherscan.io/',
  },
  {
    name: 'Scroll',
    img: 'scroll.png',
    alt: 'polygon',
    href: 'https://scrollscan.co/',
  },
  // {
  //   name: 'BNB (coming soon)',
  //   img: 'bnb.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
  // {
  //   name: '5ire (coming soon)',
  //   img: '5ire.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
  // {
  //   name: 'Metis (coming soon)',
  //   img: 'metis.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
];

const StyledSplide = styled(Splide)`
  display: block;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
export default function BlockchainsBanner() {
  return (
    <Wrapper>
      <Title>Supported blockchains</Title>

      <StyledSplide
        aria-label="Partners"
        options={{
          autoWidth: true,
          type: 'loop',
          gap: '40px',
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 1,
          perMove: 1,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {BLOCKCHAINS.map((logo, idx) => (
          <SplideSlide key={idx}>
            <StyledLink href={logo.href} target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>
              <img src={'/blockchains/' + logo.img} alt={logo.alt} height="42px" /> {logo.name}
            </StyledLink>
          </SplideSlide>
        ))}
      </StyledSplide>
      <LogosWrapper>
        {BLOCKCHAINS.map((logo, idx) => (
          <StyledLink key={idx} href={logo.href} target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>
            <img src={'/blockchains/' + logo.img} alt={logo.alt} height="42px" /> {logo.name}
          </StyledLink>
        ))}
      </LogosWrapper>
    </Wrapper>
  );
}
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: 1024px) {
    gap: 5rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 3.5rem;
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
  padding-bottom: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
