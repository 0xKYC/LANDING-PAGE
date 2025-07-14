/* 
// PRICING PAGE - COMMENTED OUT (OUTDATED)
import Head from 'next/head';
import Container from 'components/Container';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - 0xKYC ☀️ </title>
      </Head>
      <Container>
        <PricingTablesSection />
      </Container>
    </>
  );
}
*/

// TEMPORARY REDIRECT PAGE
export default function Pricing() {
  return (
    <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
      <h1>Pricing Information Currently Unavailable</h1>
      <p>
        The pricing page is temporarily unavailable as we work on reviving the 0xKYC project. 
        Follow us on <a href="https://x.com/0xkycinc" target="_blank" rel="noreferrer">X @0xkycinc</a> for updates.
      </p>
    </div>
  );
}
