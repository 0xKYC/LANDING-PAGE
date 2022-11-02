import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>☀ 0xKYC 😎 Private Web3 ID</title>
        <meta name="description" content="Compliant zero-knowledge identity" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://0xkyc.pl/">0xKYC!</a>
        </h1>

        <p className={styles.description}>
          We provide Zero Knowledge Proofs to secure your privacy.{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/0xKYC" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Find in-depth information about 0xKYC features and API (<i>currently private</i>)</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Notion &rarr;</h2>
            <p>Read our documentation and get familiar with our roadmap (<i>coming soon</i>)</p>
          </a>
{ /*
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
*/ }
        </div>
      </main>
{ /*
      <footer className={styles.footer}>
        <a
          href="https://0xkyc.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/0xKYC-logo-white-font-trimmy.png" alt="0xKYC Logo" width={388} height={117.6}/>
          </span> 
          {' '}
        </a>
      </footer>
*/ }
    </div>    
  )
}