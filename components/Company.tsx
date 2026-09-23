import Reveal from "@/components/Reveal";

const stats = [
  { value: "2021", label: "Year of incorporation" },
  { value: "Kotak", label: "Securities sub-broker" },
];

export default function Company() {
  return (
    <section className="section" id="company">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Company information</p>
            <h2>Built on trust. Guided by markets.</h2>
            <span className="rule" aria-hidden="true" />
          </header>
        </Reveal>

        <div className="stats">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <article className="stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="company-grid">
          <Reveal>
            <article className="panel">
              <h3>Who we are</h3>
              <p>
                Equitrust Solutions Private Limited is a private limited company engaged in financial
                market services. We are a <strong>sub-broker to Kotak Securities Limited</strong>,
                helping clients access brokerage and related investment services through a trusted
                institutional platform.
              </p>
              <p className="note">
                Equitrust is not Kotak Securities. All trading and demat services are offered in
                association with Kotak Securities Limited.
              </p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <aside className="facts">
              <dl>
                <div>
                  <dt>Legal name</dt>
                  <dd>Equitrust Solutions Private Limited</dd>
                </div>
                <div>
                  <dt>CIN</dt>
                  <dd>U67100HR2021PTC097213</dd>
                </div>
                <div>
                  <dt>Relationship</dt>
                  <dd>Sub-broker to Kotak Securities Limited</dd>
                </div>
                <div>
                  <dt>Registered office</dt>
                  <dd>
                    C/o Harbans Auto Store, 1st Floor Paradise Building, Arya Samaj Road, Sirsa,
                    Haryana, 125055
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
