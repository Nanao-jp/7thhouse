import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>7th.house - AIと作り上げる未来</title>
        <meta name="description" content="AIと作り上げる未来 - 7th.house" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
