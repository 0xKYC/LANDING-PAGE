import Image from "next/image";
import {
  StyledCard,
  StyledTag,
  StyledText,
  TagContainer,
  Heading,
  Text,
  StyledLink,
  Title,
} from "./styles";

interface Props {
  title: string;
  description: string;
  img?: string;
  tags: string[];
  href: string;
}
export const Service = ({
  title,
  description,
  img = "",
  tags,
  href,
}: Props) => {
  return (
    <StyledCard>
      <Heading>
        <div>
          <Image src={img} alt={title} width={60} height={40} />
        </div>
        <Title>{title}</Title>
      </Heading>
      <StyledText>{description}</StyledText>

      <TagContainer>
        {tags.map((tag) => {
          return (
            <StyledTag key={tag}>
              <Text>{tag}</Text>
            </StyledTag>
          );
        })}
        <StyledLink href={href} target="_blank" rel="noreferrer">
          Read more
        </StyledLink>
      </TagContainer>
    </StyledCard>
  );
};
