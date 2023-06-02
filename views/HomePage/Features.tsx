import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/security.svg',
    title: 'Web3 Games',
    description: 'Verify if your users have the amount of accounts they claim to have with our Proof of Uniqueness solution',
  },
  {
    imageUrl: '/grid-icons/vote.svg',
    title: 'DAO Governance',
    description: 'Safeguard your DAO voting and transactions with our user verification and abuse prevention system.',
  },
  {
    imageUrl: '/grid-icons/terms.svg',
    title: 'NFT Airdrops',
    description: "Eliminate abuse of free mints and other minting mechanisms by verifying each user's unique decentralized identifier.",
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title + idx} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
