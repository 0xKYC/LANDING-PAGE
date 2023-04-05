import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';

import { EnvVars } from 'env';

import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Newsletter from 'views/HomePage/Newsletter';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} | Private Zero Knowledge ID</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />

          {/* <BasicSection imageUrl="/moon.png" title="The future of digital identification is here" overTitle="">
            <p>
              With our simple process, users can scan their identification document and we generate a unique, soulbound token that confirms
              they are not on any sanctions lists, all stored within a Zero Knowledge (ZK) Proof on the blockchain
            </p>
          </BasicSection> */}
          <Newsletter title="The future of digital identification is here">
            <p>
              With our simple process, users can scan their identification document and we generate a unique, soulbound token that confirms
              they are not on any sanctions lists, all stored within a Zero Knowledge (ZK) Proof on the blockchain
            </p>
          </Newsletter>
          <BasicSection
            imageUrl="/github.gif"
            href="https://github.com/0xKYC"
            title="Elevate your user verification game"
            overTitle=""
            reversed
          >
            <p>No bulky integrations needed. With just a token gate, you can ensure your users are:</p>
            <ul>
              <li>over 18 years of age</li>
              <li>not OFAC sanctioned</li>
              <li>not on known fraud wallet lists</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>

        <Testimonials />
        {/* <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
        </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
  @media screen and (max-width: 1240px) {
    & > *:not(:first-child) {
      margin-top: 12rem;
    }
  }
`;
