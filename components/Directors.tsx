import Image from "next/image";
import Reveal from "@/components/Reveal";

const directors = [
  {
    name: "Rubina Singla",
    image: "/directors/rubina.jpeg",
    copy: "Co-founder and director. Rubina oversees the firm’s relationships, compliance posture, and the way clients experience Equitrust.",
  },
  {
    name: "Shiva Grover",
    image: "/directors/shiva.jpeg",
    copy: "Co-founder and director. Shiva focuses on how the practice operates day to day, so clients receive reliable, straightforward support.",
  },
];

export default function Directors() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">About us</p>
            <h2>The people behind Equitrust</h2>
            <span className="rule" aria-hidden="true" />
            <p>The company is led by two directors who set its direction and client-first culture.</p>
          </header>
        </Reveal>

        <div className="directors">
          {directors.map((person, i) => (
            <Reveal key={person.name} delay={i * 160}>
              <article className="director">
                <figure>
                  <Image
                    src={person.image}
                    alt={`${person.name}, Director of Equitrust Solutions Private Limited`}
                    fill
                    sizes="(max-width: 800px) 100vw, 520px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <figcaption className="director-overlay">
                    <p className="role">Director</p>
                    <h3>{person.name}</h3>
                  </figcaption>
                </figure>
                <div className="director-body">
                  <p>{person.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
