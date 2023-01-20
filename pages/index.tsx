import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';

import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="Why are we so cool" overTitle="Unique indentity">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection> */}
          {/* <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="So easy, no bulky integrations."
            overTitle="Intergration in 3 steps"
            reversed
          >
            <p>
              To implement 0xKYC all you need is a simple &quot;token gating&quot; system added to your app and you can ensure your{' '}
              <strong> users are not OFAC sanctioned and are unique!</strong> This is signalled with a 0xKYC soulbound token (SBT).
            </p>
            <ul>
              <li>Define ABI of our contract</li>
              <li>Call special method to check a wallet for soulbound</li>
              <li>Token gate the key functionality of your protocol</li>
            </ul>
          </BasicSection> */}
        </WhiteBackgroundContainer>
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
    margin-bottom: 15rem;
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

  & > :last-child {
    padding-bottom: 5rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
