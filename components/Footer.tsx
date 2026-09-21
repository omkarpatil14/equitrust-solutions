import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <span className="footer-mark">
            <Image src="/logo.png" alt="" width={44} height={44} />
          </span>
          <div>
            <p className="footer-brand">Equitrust Solutions Private Limited</p>
            <p>CIN: U67100HR2021PTC097213</p>
            <p>
              C/o Harbans Auto Store, 1st Floor Paradise Building, Arya Samaj Road, Sirsa, Haryana,
              125055
            </p>
          </div>
        </div>
        <p className="disclaimer">
          Investments in securities market are subject to market risks. Read all related documents
          carefully before investing. Equitrust Solutions Private Limited is a sub-broker to Kotak
          Securities Limited.
        </p>
        <p className="copyright">© 2026 Equitrust Solutions Private Limited</p>
      </div>
    </footer>
  );
}
