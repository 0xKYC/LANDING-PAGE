import Head from 'next/head';
import styled from 'styled-components';
import BasicSection, { Title } from 'components/BasicSection';

import Container from 'components/Container';
import Link, { Anchor } from 'components/Link';
import { Separator } from 'components/Separator';
import { EnvVars } from 'env';

// import Cta from 'views/HomePage/Cta';
import BackedBy from 'views/HomePage/BackedBy';
import Partners from 'views/HomePage/BlockchainsBanner';
import Blog from 'views/HomePage/BlogSection';
import FaqSection from 'views/HomePage/FaqSection';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import News from 'views/HomePage/News';
import Newsletter from 'views/HomePage/Newsletter';
// import Partners from 'views/HomePage/Partners';
import { Pricing } from 'views/HomePage/Pricing';
import Testimonials from 'views/HomePage/Testimonials';
import DiscordSuccessSection from 'views/HomePage/DiscordSuccessSection';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} - Zero-Knowledge Liveness Verification | Privacy-Preserving Identity</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BackedBy />
          <Newsletter title="Follow us on X for project updates">
            <p>
              This open-source privacy-preserving identity verification stack was previously partnered with Onfido and is provisional patent pending
              for its onchain attestation technology. Follow us on X for updates about the project&apos;s revival.
            </p>
          </Newsletter>
          <BasicSection
            imageUrl="/github.gif"
            href="https://docs.0xkyc.id/"
            title="Open Source Identity Verification Stack"
            overTitle=""
            reversed
          >
            <p>Our community-driven project provides privacy-preserving identity verification solutions:</p>
            <ul>
              <li>
                <b>Onchain attestations for your Proof of Personhood</b>
              </li>
              <li>Uniqueness Verification ✅</li>
              <li>Web3 fraud wallet lists check ✅</li>
              <li>Real world sanctions verification ✅</li>
              <li>Unique across different wallets and cross-chain 🌐</li>
              <li>We also enable reusable solutions on the edge of what&apos;s possible.</li>
            </ul>
            <p>
              All of our checks can be permissionless and are interoperable 🗻⛺ Backed by{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://www.neworder.network/">
                New Order DAO
              </Anchor>
              ,{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://outlierventures.io/">
                Outlier Ventures
              </Anchor>{' '}
              and{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://bufficorn.ventures/">
                Bufficorn Ventures
              </Anchor>{' '}
              as well as angels. We are officially a part of the{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://scroll.io/ecosystem">
                Scroll ecosystem 📜
              </Anchor>
            </p>
          </BasicSection>
          <Separator />
          <News />
          <Testimonials />
          <Container style={{ textAlign: 'center', marginTop: '2rem' }} id="use-cases">
            <Title style={{ textAlign: 'center' }}>0xKYC Use Cases</Title>
            <Box>
              <p>
                We built the most decentralized system for a Proof of Personhood. Our open-source Discord bot provided uniqueness verification as well as verification if you are a real person. It helped organizations get rid of users with duplicate accounts and enable fair giveaways, airdrops etc.
              </p>
              <p style={{ marginBottom: '5rem', marginTop: '1rem' }}>
                This open-source stack previously enabled organizations to 10x their user onboarding, create new experiences via fair distribution of rewards, and enhance game experiences (like in the example of Insert Stonks integration). The project is currently being revived by the open-source community.
              </p>
            </Box>
            <Features />
          </Container>
          <Separator />
          <FeaturesGallery />
          <Separator />
          <Blog />
          <Separator />
          {/* <Pricing /> */}
          {/* <Separator /> */}
          <FaqSection />
          <Separator />
          <DiscordSuccessSection />
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer> */}
        {/* <Cta /> */}
        {/* <BasicSectionWrapper> */}
        {/* </BasicSectionWrapper> */}
        {/* </DarkerBackgroundContainer> */}
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
`;

