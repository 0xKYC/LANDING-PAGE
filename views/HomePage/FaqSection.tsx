import styled from 'styled-components';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Link, { Anchor } from 'components/Link';

const kycData = [
  {
    title: 'What is Sunscreen?',
    description: `Sunscreen is a tool developed by 0xKYC that utilizes facial recognition technology to verify the uniqueness of each user. It's like a digital facial-biometrics passport (except that your identity isn't shared) that is unique to each person and helps prevent one person from creating multiple accounts. The best part? It is available permissionlessly onchain or via API and respects your privacy.`,
  },
  {
    title: 'What is 0xKYC?',
    description: `0xKYC is our flagship tool, which acts on data from your ID and facial biometrics. Not only does it confirm that you're a unique individual (like Sunscreen does), but it also checks if you're over 18 years old and if you're on any sanctioned lists as well as if your wallet isn't. It allows platforms to ensure they're not letting in underage or sanctioned individuals through, while keeping your personal data private.`,
  },
  {
    title: 'How do Sunscreen and 0xKYC benefit platforms like Insert Stonks or Hinkal Protocol?',
    description: `For platforms like Insert Stonks, which might worry about users creating duplicate accounts, Sunscreen can help ensure each user is unique. Meanwhile, for platforms like Hinkal Protocol, 0xKYC helps verify users' sanction status, contributing to a safer, more regulated environment.`,
  },
  {
    title: 'How do I use these services?',
    description: `We are working to deploy 0xKYC as a fully live, open source solution. Visit our`,
    documentation: true,
  },
  {
    title: 'What does it cost to use these services?',
    description: `Pricing information is currently unavailable as we work on reviving the 0xKYC project. Follow us on X @0xkycinc for updates.`,
    pricing: false,
  },
];

//

export default function FaqSection() {
  return (
    <Container id="faq">
      <Wrapper>
        <SectionTitle>Frequently asked question</SectionTitle>
        {kycData.map((item, i) => (
          <Accordion key={i} title={item.title}>
            {item.documentation && (
              <p>
                <Anchor rel="noreferrer" target="_blank" href="https://docs.0xkyc.id/">
                  Technical Documentation
                </Anchor>
                {' '}for implementation details and follow our progress on GitHub.
              </p>
            )}
            {item.description}{' '}
            {item.pricing && (
              <>
                {' '}
                <Link href="/pricing">Pricing section</Link>.
              </>
            )}
          </Accordion>
        ))}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
