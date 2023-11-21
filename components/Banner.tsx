import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  title?: string;
  subtitle?: string;
  imgUrl: string;
  order?: number;
  href?: string;
};

export const Banner = ({ title, subtitle, imgUrl, order, href }: Props) => {
  return (
    <>
      {title && (
        <TitleWrapper>
          <Img src={imgUrl} alt={title} width={25} height={25} objectFit="cover" />

          <Title>{title}</Title>
        </TitleWrapper>
      )}
      {subtitle && (
        <SubtitleWrapper>
          <Title>
            <Url href={href} target="_blank">
              {subtitle}
            </Url>
          </Title>
        </SubtitleWrapper>
      )}
    </>
  );
};

const Img = styled(Image)`
  border-radius: 0.6rem;

  @media screen and (max-width: 890px) {
    visibility: hidden;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
  padding: 0.5rem 3rem;
  align-items: center;
  justify-content: center;
  background: #8247e5;
  color: white;
  width: 100%;
  border: 1px solid #8247e5;
`;

const SubtitleWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 100%;
  border: 1px solid white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

const Title = styled.h4`
  font-size: 1.8rem;
`;

const Url = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
