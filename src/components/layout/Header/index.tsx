import {
  Burger,
  Container,
  CustomNavLinkSmall,
  HeaderSection,
  Label,
  LogoContainer,
  Menu,
  NotHidden,
  Outline,
  Span,
} from "./styles";
import { Button, Col, Drawer, Row } from "antd";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <Link href="/" aria-label="homepage">
            <LogoContainer>
              <Image
                src="/new-logo.png"
                alt="logo"
                width="180px"
                height="54px"
              />
            </LogoContainer>
          </Link>
          <NotHidden>
            <Button type="primary" disabled size="large">
              Launch App
            </Button>
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose} zIndex={50}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};
