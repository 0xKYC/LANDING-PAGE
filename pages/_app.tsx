import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
// import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import { Banner } from 'components/Banner';
import { CookieBanner } from 'components/CookieBanner';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Modal from 'components/Modal';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';

import WaveCta from 'components/WaveCta';

import { ModalContextProvider, useModalContext } from 'contexts/modal.context';
import { NavItems } from 'types';

import '@splidejs/splide/dist/css/splide.min.css';

const navItems: NavItems = [
  { title: 'Blog', href: 'https://medium.com/0xkyc' },
  { title: 'News', href: '/news', redirect: true },
  // { title: 'Use Cases', href: '#use-cases' },
  // { title: 'Integration', href: '#integration' },
  // { title: 'Pricing', href: '/pricing', redirect: true },

  // { title: 'FAQ', href: '#faq' },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="keywords" content="zero knowledge, liveness verification, privacy preserving identity, proof of personhood, onchain attestations, biometric verification, open source" />
        <meta name="description" content="Zero-knowledge liveness verification that proves you're a real, live person while keeping your identity completely private. Open source biometric verification technology." />
        <meta name="image" property="og:image" content="/og.png" />
        <meta name="title" property="og:title" content="0xKYC ☀️ Zero-Knowledge Liveness Verification" />
        <meta name="type" property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://0xkyc.id" />
        <meta property="og:description" content="Zero-knowledge liveness verification that proves you're a real, live person while keeping your identity completely private." />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="0xKYC" />
        <meta property="og:image" content="/og.png" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="0xKYC ☀️ Zero-Knowledge Liveness Verification" />
        <meta property="twitter:description" content="Zero-knowledge liveness verification that proves you're a real, live person while keeping your identity completely private." />
        <meta property="twitter:site" content="https://0xkyc.id" />
        <meta property="twitter:url" content="https://0xkyc.id" />
        <meta name="twitter:image" content="/og.png" />

        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
        <meta name="google-site-verification" content="FqOdOkygT3hoA9RZ6NGunUBJb38AgE4kd2hvIDsg8t4" />
      </Head>
      {/* <ColorModeScript /> */}
      <GlobalStyle />

      <Providers>
        <Modals />
        <div style={{ background: '#8247e5' }}>
          <Banner
            title={'We verified over 1000 unique individuals and are live on Polygon, BNB and Scroll!'}
            imgUrl="/blockchains/polygon.png"
          />
        </div>
        <Banner
          subtitle="Learn how we secure digital identity form our blog."
          imgUrl="/blockchains/polygon.png"
          href={'https://medium.com/0xkyc'}
        />
        <Navbar items={navItems} />

        <Component {...pageProps} />

        <WaveCta />
        <Footer />
        <CookieBanner />
      </Providers>
      <Analytics />
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <ModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </ModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <Modal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
