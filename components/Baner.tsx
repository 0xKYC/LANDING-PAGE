import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  title: string;
  subtitle: string;
  imgUrl: string;
  order?: number;
  href: string;
};

export const Baner = ({ title, subtitle, imgUrl, order, href }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Img src={imgUrl} alt={title} width={25} height={25} objectFit="cover" />

        <Title>{title}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Title>{subtitle}</Title>
      </SubtitleWrapper>
    </Wrapper>
  );
};

const Img = styled(Image)`
  border-radius: 0.6rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  align-items: center;
  justify-content: center;
  background: #8247e5;
  color: white;
  width: 100%;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 1.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(var(--text));
`;
