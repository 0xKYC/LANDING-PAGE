import Image from 'next/image';
import styled from 'styled-components';
import Link, { Anchor } from 'components/Link';
import SectionTitle from 'components/SectionTitle';

export const Pricing = () => {
  return (
    <Wrapper>
      <SectionTitle>Pricing</SectionTitle>
      <StyledText>
        Discover our <Link href="/pricing">competitive pricing</Link> and get in touch with our{' '}
        <Anchor href="mailto:support@0xkyc.id">sales team</Anchor>
      </StyledText>
    </Wrapper>
  );
};

const Wrapper = styled('section')`
  text-align: center;
  padding: 0 2rem;
  margin-top: 6rem;
`;
const StyledText = styled('p')`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
`;
