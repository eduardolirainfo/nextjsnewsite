import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Lira</title>
        <meta name="description" content="Eduardo Lira | Ideias, café e tecnologias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">TESTE EDUARDO </h1>
    </div>
  )
}

export default Home
