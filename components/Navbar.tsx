import Image from 'next/image';
import NextLink from 'next/link';

import styled from 'styled-components';

import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from './Button';
import Container from './Container';
import Drawer from './Drawer';

import { HamburgerIcon } from './HamburgerIcon';
import Link from 'next/link';

type NavbarProps = { items: NavItems };

export default function Navbar({ items }: NavbarProps) {
  const { toggle } = Drawer.useDrawer();

  return (
    <NavbarContainer>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Image src="/new-logo.png" alt="logo" width={164} height={50} />
          </LogoWrapper>
        </NextLink>
        <NextLink href="/" passHref>
          <MobileLogoWrapper>
            <Image src="/0xkyc-icon.png" alt="logo" width={50} height={50} />
          </MobileLogoWrapper>
        </NextLink>

        <NavItemList>
          {items.map((item) => {
            return <NavLink key={item.title} href={item.href} title={item.title} />;
          })}
          <NavItem title="LAUNCH APP" href="https://app.0xkyc.id/" />
        </NavItemList>
        {/* Hide color switcher
        <ColorSwitcherContainer>
          <ColorSwitcher />
        </ColorSwitcherContainer> */}
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  return (
    <NavItemWrapper outlined={outlined}>
      <Button href={href} target="_blank" rel="noreferrer">
        {title}
      </Button>
    </NavItemWrapper>
  );
}
export function NavLink({ href, title, outlined, redirect }: SingleNavItem) {
  return (
    <CustomNavItemWrapper outlined={outlined}>
      {redirect ? <Link href={href}>{title}</Link> : <a href={href}>{title}</a>}
    </CustomNavItemWrapper>
  );
}

const NavItemList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: none;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));

  @media screen and (min-width: 360px) {
    display: flex;
  }
`;

const MobileLogoWrapper = styled(LogoWrapper)`
  display: flex;
  @media screen and (min-width: 360px) {
    display: none;
  }
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'white')};
    /* color: white; */
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
const CustomNavItemWrapper = styled(NavItemWrapper)`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  a {
    color: black;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  /* visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out; */
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;
