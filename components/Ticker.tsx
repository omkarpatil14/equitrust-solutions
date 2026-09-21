const items = [
  "Equitrust Solutions",
  "Sub-broker to Kotak Securities Limited",
  "Registered in Sirsa, Haryana",
  "CIN U67100HR2021PTC097213",
  "Directors Rubina Singla & Shiva Grover",
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
