import { RocketOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "../../SvgIcon";
import Wave from "../../Wave";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Chat,
  FooterContainer,
  StyledLink,
  StyledContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

export const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <StyledContainer>
          <Row justify="end">
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Contact</Title>
              <Para>Do you have any questions?</Para>

              <a href="mailto:@gmail.com">
                <Chat>Send Us an Email</Chat>
              </a>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Company</Title>
              <Link href="/about">
                <StyledLink>About Us</StyledLink>
              </Link>

              <StyledLink
                href="https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299"
                target="_blank"
                rel="noopener"
              >
                Documentation
              </StyledLink>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Legal</Title>
              <Link href="/privacy-policy">
                <StyledLink>Privacy Policy</StyledLink>
              </Link>
              <Link href="/terms-of-service">
                <StyledLink>Terms of Service</StyledLink>
              </Link>
            </Col>
          </Row>
        </StyledContainer>
      </FooterSection>
      <Extra>
        <StyledContainer>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink href="/">
              <LogoContainer>
                <Image
                  src="/new-logo.png"
                  alt="logo"
                  height="44px"
                  width="150px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="https://github.com/0xKYC" src="github.svg" />
              <SocialLink
                href="https://twitter.com/0xkycinc"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/0xkyc/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </StyledContainer>
      </Extra>
    </>
  );
};
