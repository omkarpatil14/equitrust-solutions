export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow glow-a" aria-hidden="true" />
      <div className="hero-glow glow-b" aria-hidden="true" />
      <div className="hero-frame" aria-hidden="true" />
      <img className="hero-mark" src="/logo.png" alt="" width={200} height={200} />

      <div className="wrap hero-layout">
        <div className="hero-inner">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Established 2021 · Sirsa, Haryana
          </p>
          <h1>
            <span className="word">Equitrust</span>
            <span className="word">Solutions</span>
            <span className="word faint">Private Limited</span>
          </h1>
          <p className="lede">
            Discretion, clarity, and a trusted institutional platform. We are a sub-broker to
            Kotak Securities Limited.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#about">
              Meet the directors
            </a>
            <a className="btn btn-ghost" href="#company">
              Company information
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="hero-card-kicker">Relationship</p>
          <p className="hero-card-title">Sub-broker</p>
          <p className="hero-card-body">Kotak Securities Limited</p>
          <ul className="hero-meta">
            <li>
              <span>CIN</span>
              U67100HR2021PTC097213
            </li>
            <li>
              <span>Seat</span>
              Sirsa, Haryana
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
