import Head from 'next/head';

export default function HomePage() {
  return (
    <div id="root">
      <Head>
        <title>Planning Poker</title>
      </Head>
      <div className="outer-card">
        <div className="card">
          <button type="button">Entrar</button>
          <button type="button">Entrar</button>
        </div>
      </div>
    </div>
  );
}
