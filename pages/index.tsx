import Head from "next/head";
import { HeroSection } from "../src/components/HeroSection";
import Services from "../src/components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>☀ 0xKYC 😎 Private Web3 ID</title>
        <meta name="description" content="Compliant zero-knowledge identity" />
        <link rel="icon" href="" />
      </Head>

      <HeroSection />
      <Services />
    </div>
  );
}
