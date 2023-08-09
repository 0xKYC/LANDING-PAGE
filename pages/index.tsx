import Head from 'next/head';
import styled from 'styled-components';
import BasicSection, { Title } from 'components/BasicSection';

import Container from 'components/Container';
import { Anchor } from 'components/Link';
import { Separator } from 'components/Separator';
import { EnvVars } from 'env';

// import Cta from 'views/HomePage/Cta';
import BackedBy from 'views/HomePage/BackedBy';
import Partners from 'views/HomePage/BlockchainsBanner';
import Blog from 'views/HomePage/BlogSection';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import News from 'views/HomePage/News';
import Newsletter from 'views/HomePage/Newsletter';
// import Partners from 'views/HomePage/Partners';
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
          <BackedBy />
          <Newsletter title="The future of digital identification is here">
            <p>
              We can scan IDs or do an award-winning{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://github.com/0xKYC/0xkyc-1vote-aragon-plugin">
                1Vote
              </Anchor>{' '}
              check to verify if you are unique on the blockchain <span style={{ color: 'rgb(var(--primary))' }}>☀</span> With our simple
              process you generate a unique, soulbound token that confirms you are not a bot and an unique inidividual available on{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://blog.aragon.org/dao-global-hackathon-bounty-winners/">
                Aragon OSx
              </Anchor>
              , as a soulbound token or via our unique minting mechanism.
            </p>
          </Newsletter>
          <BasicSection
            imageUrl="/github.gif"
            href="https://github.com/0xKYC/.docs/blob/main/IMPLEMENTATION.md"
            title="Elevate your user verification game"
            overTitle=""
            reversed
          >
            <p>Verify if users have double accounts with just a token gate!</p>
            <ul>
              <li>
                <b>Stand-Alone Web3 Game ID</b>
              </li>
              <li>Biometrics and/or Documents ✅</li>
              <li>Web3 fraud wallet lists ✅</li>
              <li>Sanctions checks on-chain ✅</li>
              <li>Unique across different wallets and cross-chain 🌐</li>
            </ul>
            <p>
              All of our checks are permissionless and interoperable 🗻⛺ Backed by{' '}
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
              </Anchor>
              . We are officially a part of the{' '}
              <Anchor rel="noreferrer" target="_blank" href="https://scroll.io/ecosystem">
                Scroll ecosystem 📜
              </Anchor>
            </p>
          </BasicSection>
          <Separator />
          <News />
          <Testimonials />
          <Container style={{ textAlign: 'center', marginTop: '5rem' }} id="use-cases">
            <Title style={{ textAlign: 'center' }}>0xKYC Use Cases</Title>
            <Box>
              <p>
                Check if a user has a double-account, verify it and avoid doing airdrops to bots. Avoid Airdrop Hunters, get rid of bots
                ruining your game. Verify uniqueness on-chain, get a sanctions-free verification and integrate 0xKYC into your decentralized
                app today. Contact us:{' '}
                <Anchor rel="noreferrer" target="_blank" href="https://calendly.com/adamzasada">
                  Calendly
                </Anchor>
                - We are at your service.
              </p>
              <p style={{ marginBottom: '5rem', marginTop: '1rem' }}>
                No more destruction of Web3 and airdrop economics, tokenomics and inefficient give-aways. No more abuse of DAO governance
                power, no more paying out to sanctioned individuals, say goodbye to users opening new accounts as if they were a different
                person! <strong>#1User1Vote</strong>
              </p>
            </Box>
            <Features />
          </Container>
          <Separator />
          <FeaturesGallery />
          <Blog />
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
