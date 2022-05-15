import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Head from 'next/head'
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta property='description' content={SEO.descripiton} />
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
