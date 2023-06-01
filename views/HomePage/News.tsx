import Container from 'components/Container';
import { News } from 'components/News';
import SectionTitle from 'components/SectionTitle';

const NEWS = [
  {
    title: '0xKYC and Insert Stonks Collaboration',
    description:
      'Our integration utilizes blockchain-based identity verification and token-gating solutions to combat fraud, ensuring a safer gaming environment.',
    imgUrl: '/posts/ov-banner.jpeg',

    href: 'https://outlierventures.io/securing-the-open-metaverse-0xkyc-and-insert-stonks-collaborate-to-tackle-fraud/',
  },
  {
    title: 'Winning the DAO Global Hackathon',
    description:
      'Leveraging our proprietary Proof of Uniqueness technology to democratize DAO governance. Users can secure a unique identifier and a single verified vote with a simple selfie, eliminating fake accounts and duplicate votes.',
    imgUrl: '/posts/dao-global.png',
    href: 'https://blog.aragon.org/dao-global-hackathon-bounty-winners/',
    order: 2,
  },

  {
    title: 'Our Beginnings',
    description:
      'ETHWarsaw was a pivotal event for us, where our team brainstormed ideas and created a zero-knowledge proof solution for storing KYC/AML data on-chain.',
    imgUrl: '/posts/ethwarsaw.jpg',
    href: 'https://medium.com/ethwarsaw/0xkyc-the-ethwarsaw-success-story-5c3663a33996',
  },
];
export default function NewsSection() {
  return (
    <Container id="news">
      <SectionTitle style={{ marginTop: '8rem', marginBottom: '8rem' }}>Latest news</SectionTitle>

      {NEWS.map((news) => {
        return (
          <News
            description={news.description}
            imgUrl={news.imgUrl}
            title={news.title}
            key={news.title}
            order={news.order}
            href={news.href}
          />
        );
      })}
    </Container>
  );
}
