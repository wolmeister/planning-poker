import Head from 'next/head';

export default function HomePage() {
  return (
    <div id="root">
      <Head>
        <title>Planning Poker</title>
      </Head>
      <div className="cards">
        <div className="card card--club">
          <span className="card__text">S</span>
        </div>
        <div className="card card--diamond">
          <span className="card__text">O</span>
        </div>
        <div className="card card--heart">
          <span className="card__text">O</span>
        </div>
        <div className="card card--spade">
          <span className="card__text">N</span>
        </div>
      </div>
    </div>
  );
}
