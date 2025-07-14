import styled from 'styled-components';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import { media } from 'utils/media';

interface DiscordCardProps {
  title: string;
  description: string;
  secondDescription?: string;
  role1?: string;
  role2?: string;
  imageUrl: string;
}

function DiscordCard({ title, description, secondDescription, role1, role2, imageUrl }: DiscordCardProps) {
  return (
    <Card>
      {!secondDescription ? (
        <>
          <Image src={imageUrl} alt={title} />
          <Title>{title}</Title>
          <Description>
            <span>{description}</span>
          </Description>
        </>
      ) : (
        <>
          <Image src={imageUrl} alt={title} />
          <Title>{title}</Title>
          <Description>
            <UniqueTag>{role1}</UniqueTag>
            <span> {description}</span>
          </Description>
          <Description>
            <VerifiedTag>{role2}</VerifiedTag>
            <span> {secondDescription}</span>
          </Description>
        </>
      )}
    </Card>
  );
}

const discordData = [
  {
    imageUrl: '/grid-icons/security.svg',
    title: 'Understanding Our System: Facial Biometrics',
    description:
      'Our cutting-edge system previously utilized Onfido\'s facial biometrics to ensure authentic and unique user identification. We work on an open source alternative that analyzes facial features to verify individuality, ensuring each account is distinct and genuine.',
  },
  {
    imageUrl: '/grid-icons/authentication.svg',
    title: 'Unique vs. Verified Roles: What\'s the Difference?',
    description: 'Our system assigns two distinct roles: Unique ❤️ Role (assigned when you have only one account in a server) and Verified ✅ Role (granted when our system confirms you\'re a real person). Typically, users have both roles, indicating a sole, verified account.',
  },
  {
    imageUrl: '/grid-icons/version_control.svg',
    title: 'Integration with Zealy and Galaxe: Enhancing Bot Functionality',
    description:
      'Seamlessly integrate with bots like Zealy or Galaxe. Use our \'required role\' feature to allow only unique and verified users to access specific rewards. This integration empowers you to create a more secure and exclusive community experience.',
  },
];

export default function DiscordSuccessSection() {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Discord Bot Success Stories</SectionTitle>
        <SubTitle>
          Over 100 Discord servers have used our bot to protect their communities. While the bot is currently not operational, you can learn about its implementation on GitHub.
        </SubTitle>
        
        <CardsContainer>
          {discordData.map((data, index) => (
            <DiscordCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              secondDescription={data.secondDescription}
              role1={data.role1}
              role2={data.role2}
            />
          ))}
        </CardsContainer>

        <CTASection>
          <CTATitle>Join the Open Source Revolution</CTATitle>
          <CTADescription>
            Help us rebuild 0xKYC as a fully open source privacy-preserving identity verification solution. While our Discord bot is currently not operational, you can explore the implementation and contribute to the future of decentralized identity.
          </CTADescription>
          <ButtonGroup>
            <Button
              as="a"
              href="https://github.com/0xkyc"
              target="_blank"
              rel="noreferrer"
            >
              Explore Our Repos
            </Button>
            <Button
              as="a"
              href="https://x.com/0xkycinc"
              target="_blank"
              rel="noreferrer"
              transparent
            >
              Follow Our Progress
            </Button>
          </ButtonGroup>
        </CTASection>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.8rem;
  opacity: 0.8;
  margin-bottom: 8rem;
  margin-top: 3rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;

  > *:nth-child(odd) {
    ${media('>tablet')} {
      grid-template-areas:
        'title image'
        'description image'
        'secondDescription image';
      gap: 0;
      grid-template-rows: auto auto auto;
      grid-template-columns: 1fr 1fr;
      row-gap: 1.2rem;
    }
  }

  > *:nth-child(odd) > img {
    ${media('>tablet')} {
      grid-area: image;
      justify-self: center;
      align-self: center;
      margin: auto;
    }
  }

  > *:nth-child(odd) > div {
    ${media('>tablet')} {
      grid-area: 'title';
      place-self: center start;
    }
  }

  > *:nth-child(odd) > p {
    ${media('>tablet')} {
      text-align: left;
      grid-area: description;
    }
  }

  > *:nth-child(odd) > p:nth-of-type(2) {
    ${media('>tablet')} {
      text-align: left;
      grid-area: secondDescription;
    }
  }
`;

const Card = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 2rem;
  padding: 5.5rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-lg);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 1rem;
  color: rgb(var(--text));
  font-size: 1.8rem;

  ${media('>tablet')} {
    padding: 5.5rem 4rem;
    grid-template-areas:
      'image title'
      'image description';
    gap: 0;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.2rem;
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  width: 128px;
  height: 128px;
  ${media('>tablet')} {
    width: 250px;
    height: 250px;
    grid-area: image;
    justify-self: center;
    align-self: center;
    margin: auto;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2.3rem;
  margin-bottom: 0.2rem;
  ${media('>tablet')} {
    grid-area: 'title';
    place-self: center start;
    text-align: left;
  }
`;

const Description = styled.p`
  min-height: 40%;
  line-height: 1.6;
  ${media('>tablet')} {
    text-align: left;
    grid-area: description;
  }
  > :last-child {
    opacity: 0.6;
  }
`;

const UniqueTag = styled.span`
  color: rgb(var(--text));
  font-size: 1.8rem;
  background: rgb(45, 55, 72, 0.5);
  border-radius: 0.5rem;
  max-width: max-content;
  padding: 0.3rem;
  margin-right: 2px;
  box-shadow: 0px 0px 7px rgba(255, 0, 0, 0.5);
`;

const VerifiedTag = styled.span`
  color: rgb(var(--text));
  font-size: 1.8rem;
  background: rgb(45, 55, 72, 0.5);
  border-radius: 0.5rem;
  max-width: max-content;
  padding: 0.3rem;
  margin-right: 2px;
  box-shadow: 0px 0px 4px rgba(0, 255, 0, 0.5);
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
`;

const CTATitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: rgb(var(--text));
`;

const CTADescription = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;