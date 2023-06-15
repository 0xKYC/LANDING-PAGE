import Image from 'next/image';
import { TwitterIcon } from 'react-share';
import styled from 'styled-components';

import { Title } from './BlockchainsBanner';

const INVESTORS = [
  {
    name: 'New Order Dao',
    img: 'new-order.png',
    href: 'https://www.neworder.network/',
  },
  { name: 'Outlier Ventures', img: 'outlier-ventures.png', href: 'https://outlierventures.io/' },
];

const ANGELS = [
  {
    name: 'David Deputy',
    img: 'dave-deputy.jpeg',
    href: 'https://twitter.com/DeputyDavid',
    desc: 'Ex-UK Banking Regulator',
  },
  {
    name: 'Bartłomiej Matusewicz',
    img: 'BART.jpg',
    href: 'https://twitter.com/bartmatusewicz',
    desc: 'Angel Investor',
  },
  {
    name: 'Ismail Khoffi',
    img: 'celestia-ceo.jpg',
    href: 'https://twitter.com/KreuzUQuer',
    desc: 'Co-Founder, CTO of Celestia Labs',
  },
];
export default function BackedBy() {
  return (
    <Wrapper>
      <Title>We are backed by</Title>

      <InverstorsWrapper>
        {INVESTORS.map((investor) => {
          return (
            <a key={investor.name} href={investor.href} rel="noreferrer" target="_blank">
              <SImage src={`/fixed/${investor.img}`} alt={investor.name} width="320px" height="50px" objectFit="contain" />
            </a>
          );
        })}
      </InverstorsWrapper>

      <AnglesWrapper>
        {ANGELS.map((angel) => {
          return (
            <StyledLink key={angel.name} href={angel.href} rel="noreferrer" target="_blank">
              <Box>
                <StyledImage src={`/fixed/${angel.img}`} alt={angel.name} width="54px" height="54px" />
                <InfoBox>
                  <P>{angel.name}</P>
                  <Description>{angel.desc}</Description>
                </InfoBox>

                <TwitterIcon size={24} round={true} />
              </Box>
            </StyledLink>
          );
        })}
      </AnglesWrapper>
    </Wrapper>
  );
}
const P = styled.p`
  font-size: 1.6rem;
  padding-top: 0.4rem;
`;
const InfoBox = styled.div`
  padding: 0 2rem;
  width: 80%;
`;
const Description = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  padding-bottom: 0.4rem;
`;
const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4rem;
`;

const Box = styled.div`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background: rgb(var(--background));
  border-radius: 5rem;
  transition: 0.3s ease;

  :hover {
    box-shadow: 0 0 5px rgb(251, 115, 36);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const SImage = styled(Image)`
  transition: all 0.2s ease;
  cursor: pointer;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
  }
`;
const InverstorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-bottom: 2rem;

  @media screen and(max-width:1024px) {
    margin: 0 10rem;
    gap: 10rem;
  }
`;

const AnglesWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  @media screen and (max-width: 1180px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
