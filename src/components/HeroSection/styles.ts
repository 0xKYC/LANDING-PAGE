import { Button, Row } from "antd";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledSpan = styled("span")`
  color: ${colors.primary};
`;

export const Wrapper = styled("section")`
  text-align: center;
`;

export const StyledText = styled("p")`
  margin: 2rem;
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    margin: 0 4rem;
    font-size: 1.4rem;
  }
`;
export const H1 = styled("h1")`
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 3.3rem;
  }
`;
export const StyledRow = styled(Row)`
  margin-top: 5rem;
  @media screen and (min-width: 1024px) {
    margin-top: 10rem;
  }
`;
