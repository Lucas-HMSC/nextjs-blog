import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Lucas</strong>. I'm a JavaScript Developer and an Undergraduate Computer Science. You can contact me on <a href="https://t.me/lucas_hmsc">Telegram.</a></p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
