import Head from 'next/head'
import type { NextPage } from 'next'

import Banner from 'components/banner/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Walees</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Banner />
    </>
  )
}

export default Home
