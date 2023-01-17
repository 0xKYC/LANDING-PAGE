import { useEffect, useState } from "react";
import { getScroll } from "../../utils/getWindow";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

export const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target, true);

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
};
