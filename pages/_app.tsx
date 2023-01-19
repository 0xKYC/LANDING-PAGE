import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';

import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  // { title: 'About', href: '/features' },
  // { title: 'Contact', href: '/contact' },
  { title: 'App (Coming soon)', href: '/app', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="keywords" content="Compliant Zero Knowledge KYC" />
        <meta
          name="description"
          content="Compliant Zero Knowledge KYC solution that creates a KYC check to verify if a user is OFAC sanctioned without showing their name on-chain"
        />
        <meta name="image" property="og:image" content="https://0xkyc.id/product-launch.svg" />
        <meta name="title" property="og:title" content="Compliant Zero Knowledge KYC" />
        <meta name="type" property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://0xkyc.id" />
        <meta
          property="og:description"
          content="Compliant Zero Knowledge KYC solution that creates a KYC check to verify if a user is OFAC sanctioned without showing their name on-chain"
        />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="0xKYC" />

        <meta property="twitter:title" content="0xKYC" />
        <meta property="twitter:description" content="Compliant Zero Knowledge KYC" />
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
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />

        <Component {...pageProps} />

        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
