import Head from 'next/head';
import styled from 'styled-components';
import BasicSection, { BasicSectionWrapper, Title } from 'components/BasicSection';

import { EnvVars } from 'env';

import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Newsletter from 'views/HomePage/Newsletter';
import Partners from 'views/HomePage/Partners';

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
            imageUrl="/verified.png"
            href="https://mumbai.polygonscan.com/tx/0xdf3f3a07869a4d0925a992b5033da05d03ca9107aea4a4e38d01ef1e4bc5a802"
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
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          {/* <BasicSectionWrapper> */}
          <Box>
            <Title>Why you need 0xKYC</Title>
            <div style={{ margin: '0 5rem' }}>
              <p>
                Integrating 0xKYC into your decentralized application (dApp) can provide a seamless, secure, and decentralized way for users
                to complete KYC once and use that verification across multiple dApps.{' '}
              </p>
              <p style={{ marginBottom: '5rem', marginTop: '1rem' }}>
                By reducing friction for users and complying with regulatory requirements, businesses can increase engagement and ultimately
                boost their bottom line while maintaining user privacy and security.
              </p>
            </div>
            <Features />
          </Box>

          {/* </BasicSectionWrapper> */}
          <FeaturesGallery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const Box = styled.div`
  text-align: center;
  margin: 0 1rem;
  font-size: 1.7rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 1224px) {
    margin: 0 20rem;
  }
`;
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding-top: 8rem;
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  padding-bottom: 5rem;
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
  @media screen and (max-width: 1240px) {
    & > *:not(:first-child) {
      margin-top: 12rem;
    }
  }
`;
