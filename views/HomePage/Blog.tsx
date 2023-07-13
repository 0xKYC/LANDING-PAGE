import { useEffect, useState } from 'react';
import { Blog } from 'components/Blog';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

export default function BlogSection() {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const result = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/0xkyc')
        .then((res) => res.json())
        .then((data) => {
          // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
          const res = data.items; //This is an array with the content. No feed, no info about author etc..
          const posts = res.filter((item: any) => item.categories.length > 0); // That's the main trick* !
          return posts;
        });
      if (!ignore) {
        setBlogposts(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Container id="blog">
      <SectionTitle style={{ marginTop: '8rem', marginBottom: '8rem' }}>Blog</SectionTitle>

      {blogposts?.map((news: any) => {
        return (
          <Blog description={news.content} imgUrl={news.thumbnail} title={news.title} key={news.guid} order={news.order} href={news.link} />
        );
      })}
    </Container>
  );
}
