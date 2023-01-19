import Head from "next/head";
import { TextContainer } from "../src/components/TextContainer";
import content from "../src/content/about.json";
export default function PrivacyPolicy() {
  const { text } = content;
  return (
    <div>
      <Head>
        <title>☀ 0xKYC 😎 Private Web3 ID</title>
        <meta name="description" content="Compliant zero-knowledge identity" />
        <link rel="icon" href="" />
      </Head>
      <TextContainer text={text} title="About us" />;
    </div>
  );
}
