import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'DAO Work',
    description:
      "With 0xKYC you can block users who aren't legally allowed to work for your DAO as well as track them to never hire that one person who didn't do their job",
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'DAO Governance',
    description:
      'Our system almost entirely eliminates the problem of users abusing their voting rights in DAOs as well as helps you verify if you can send or receive funds from',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'NFT Marketplaces',
    description:
      'No more free abuse of free mints and other minting mechanisms, now you know that users are the same person across wallets',
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
