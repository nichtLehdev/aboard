import { inter } from '@/styles/fonts';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>aboard.at</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>aboard.at</main>
    </>
  );
}
