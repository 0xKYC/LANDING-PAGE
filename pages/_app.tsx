import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
// import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import { CookieBanner } from 'components/CookieBanner';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Modal from 'components/Modal';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';

import WaveCta from 'components/WaveCta';

import { ModalContextProvider, useModalContext } from 'contexts/modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'News', href: '#news' },
  { title: 'Use Cases', href: '#use-cases' },
  { title: 'Integration', href: '#integration' },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="keywords" content="Private, Zero Knowledge ID" />
        <meta
          name="description"
          content="0xKYC is a Zero Knowledge solution to create a verified record on-chain without showing user's name and surname"
        />
        <meta name="image" property="og:image" content="https://0xkyc.id/product-launch.svg" />
        <meta name="title" property="og:title" content="0xKYC - Private ☀️ Zero Knowledge ID" />
        <meta name="type" property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://0xkyc.id" />
        <meta
          property="og:description"
          content="0xKYC is a Zero Knowledge solution to create a verified record on-chain without showing user's name and surname"
        />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="0xKYC" />

        <meta property="twitter:title" content="0xKYC" />
        <meta property="twitter:description" content="Private, Zero Knowledge ID" />
        <meta property="twitter:site" content="https://0xkyc.id" />
        <meta property="twitter:image" content="https://0xkyc.id/product-launch.svg" />

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
