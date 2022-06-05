import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wkkly</title>
        <meta
          name="description"
          content="A to-do app that lets you set your goals for the week and split them into daily tasks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Wkkly</main>
    </div>
  );
}
