import Image from 'next/image';
import NextLink from 'next/link';
import { LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';
import Link from 'next/link';

type SingleFooterListItem = { title: string; href: string; link?: boolean };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      // { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },

  {
    title: 'Knowledge',
    items: [
      { title: 'Documentation', href: 'https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299', link: true },
      { title: 'Contact', href: 'mailto:support@0xkyc.id', link: true },
    ],
  },
];

const LogoWrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: rgb(var(--logoColor));
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-right: 3.5rem;

  ${media('<=desktop')} {
    display: none;
  }
  @media screen and (max-width: 1079px) {
    display: none;
  }
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <Link href="/" passHref>
            <LogoWrapper>
              <Image src="/logo-white.png" alt="logo" width={164} height={50} />
            </LogoWrapper>
          </Link>

          <ShareBar>
            <Flex>
              <ListItem title="Privacy Policy" href="https://app.0xkyc.id/privacy-policy" link={true} />
              <ListItem title="Contact" href="mailto:support@0xkyc.id" />
              <ListItem
                title="Documentation"
                href="https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299"
                link={true}
              />
            </Flex>
            <a href="https://twitter.com/0xKYCinc" rel="noreferrer" target="_blank">
              <TwitterIcon size={50} round={true} />
            </a>

            <a href="https://github.com/0xKYC" rel="noreferrer" target="_blank">
              <Image src="/gh-new.png" alt="github" width={48} height={48} />
            </a>

            <a href="https://www.linkedin.com/company/0xkyc/" rel="noreferrer" target="_blank">
              <LinkedinIcon size={50} round={true} />
            </a>
            <a href="https://www.crunchbase.com/organization/0xkyc" rel="noreferrer" target="_blank">
              <Image src="/crunchbase.png" alt="crunchbase" width={48} height={48} />
            </a>
          </ShareBar>
          <Copyright>&copy; 2023 0xKYC, Inc. All rights reserved.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href, link }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        {link ? (
          <a href={href} rel="noreferrer" target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  /* display: none; */
  display: flex;
  justify-content: center;

  ${media('<=tablet')} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  display: flex;
  margin-top: 1rem;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
  @media screen and (max-width: 1100px) {
    gap: 0.8rem;
  }
`;
