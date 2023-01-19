import { StyledContainer, StyledText, StyledTitle } from "./styles";

interface Props {
  text: string;
  title: string;
}
export const TextContainer = ({ text, title }: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};
