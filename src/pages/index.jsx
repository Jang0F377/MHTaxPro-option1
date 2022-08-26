import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tax Office of Michael Haney</title>
          <link rel='shortcut icon' href='/mh-logo.webp'/>
        <meta
          name="description"
          content="The better tax professional, the better tax experience."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
