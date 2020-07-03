import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Taco() {
  return (
    <Layout>
      <Head>
        <title>Tacos</title>
      </Head>
      <h1>This is my taco page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}