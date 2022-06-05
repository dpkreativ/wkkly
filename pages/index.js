import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wkkly</title>
        <meta
          name="description"
          content="A todo app that lets you organize your goals as weekly tasks to be shared among the days of the week."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Wkkly</main>
    </div>
  );
}
