import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { Fade, Slide } from "react-awesome-reveal";
import { SvgIcon } from "../SvgIcon";
import { H1, StyledRow, StyledSpan, StyledText, Wrapper } from "./styles";

export const HeroSection = () => {
  return (
    <Wrapper>
      <Slide triggerOnce>
        <H1>
          Are you ready for <br /> <StyledSpan>Zero Knowledge</StyledSpan>{" "}
          identity?
        </H1>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299"
          type="link"
          size="large"
          style={{ color: "#fb7324", fontSize: "1.2rem" }}
        >
          Learn more
          <RightOutlined />
        </Button>

        <SvgIcon src="product-launch.svg" width="500" height="400" />
      </Slide>

      <Fade delay={50} direction="up">
        <StyledRow>
          <Col xs={24} lg={12}>
            <div>
              <SvgIcon src="developer.svg" width="650" height="400" />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div>
              <h2 style={{ fontSize: "2.5rem" }}>
                The race for Web3 identity is on!
              </h2>
              <StyledText>
                We believe we have the best solution on the market, offering
                compliance, security and wholeness of KYC
              </StyledText>
            </div>
          </Col>
        </StyledRow>
      </Fade>
      <Fade delay={400}>
        <StyledRow style={{ marginBottom: "12rem" }}>
          <Col lg={12}>
            <h3 style={{ fontSize: "2.8rem" }}>
              So easy, no bulky integrations
            </h3>
            <StyledText>
              Simply call our API and get the check as if you did it yourself
            </StyledText>
          </Col>
          <Col xs={24} lg={12} order={1}>
            <SvgIcon src="waving.svg" width="550" height="400" />
          </Col>
        </StyledRow>
      </Fade>
    </Wrapper>
  );
};
