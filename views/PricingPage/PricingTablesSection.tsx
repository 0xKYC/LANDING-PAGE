import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>
        Simple and sustainable pricing. <br />
        Flexible features.{' '}
      </SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Sunscreen"
          description="Uniqueness verification"
          benefits={['Unique indentifer for human', 'Sanctions-free status for Web3 wallet', 'Some feature', 'Some feature']}
        >
          $1<span>/check</span>
        </PricingCard>
        <PricingCard
          title="0xKYC"
          description="Sanctions check"
          benefits={[
            'Unique indentifer for human',
            'User sanction status in ZK proof',
            'User +18 age confirmation',
            'Sanctions-free status for Web3',
            'Some feature',
            'Some feature',
          ]}
          isOutlined
        >
          $3<span>/check</span>
        </PricingCard>
        <PricingCard
          title="Enterprise"
          description="Customisable solution for your needs"
          benefits={[
            'Unique indentifer for human',
            'User sanction status in ZK proof',
            'User +18 age confirmation',
            'Sanctions-free status for Web3 wallet',
          ]}
        >
          $<span>/let&apos;s chat</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 5rem;
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
