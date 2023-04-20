import Head from 'next/head';
import styled from 'styled-components';
import BasicSection, { Title } from 'components/BasicSection';

import Container from 'components/Container';
import { EnvVars } from 'env';

// import Cta from 'views/HomePage/Cta';
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
        <title>{EnvVars.SITE_NAME} - Private ☀️ Zero Knowledge ID</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <Newsletter title="The future of digital identification is here">
            <p>
              With our simple process, users can scan their identification document and we generate a unique, soulbound token that confirms
              they are not on any sanctions lists, all stored within a Zero Knowledge (ZK) Proof on the blockchain
            </p>
          </Newsletter>
          <Container style={{ textAlign: 'center', marginTop: '8rem' }}>
            <Title style={{ textAlign: 'center' }}>0xKYC Use Cases</Title>
            <Box>
              <p>
                Integrating 0xKYC into your decentralized application (dApp) provides a seamless and secure experience. With 0xKYC you know
                your community are unique and not sanctioned individuals.
              </p>
              <p style={{ marginBottom: '5rem', marginTop: '1rem' }}>
                No more abuse of DAO governance systems, no more paying out to sanctioned individuals, say goodbye to users opening new
                accounts as if they are a different person! <strong>#1Person1Vote</strong>
              </p>
            </Box>
            <Features />
          </Container>

          <BasicSection
            imageUrl="/github.gif"
            href="https://github.com/0xKYC/.docs/blob/main/IMPLEMENTATION.md"
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
          <Testimonials />
          {/* </BasicSectionWrapper> */}
          <FeaturesGallery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 1.5rem;
  @media screen and (min-width: 1224px) {
    width: 70%;
  }
`;
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding-top: 1rem;
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  padding-bottom: 5rem;
  /* & > *:not(:first-child) {
    margin-top: 15rem;
  } */
  /* @media screen and (max-width: 1240px) {
    & > *:not(:first-child) {
      margin-top: 6rem;
    } */
  }
`;
