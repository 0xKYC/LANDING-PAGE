import styled from "styled-components";
import { ScrollToTop } from "../ScrollToTop";
import Wave from "../Wave";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}
const Wrapper = styled("main")`
  position: relative;
  max-width: 1200px;
  margin: 0 2rem;
  min-height: 80vh;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="wave_container">
        <Wrapper>{children}</Wrapper>
        <Wave />
      </div>
      <Footer />
    </>
  );
};
