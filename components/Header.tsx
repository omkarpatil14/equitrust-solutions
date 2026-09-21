import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Image src="/logo.png" alt="Equitrust Solutions" width={48} height={48} priority />
          </span>
          <span className="brand-text">
            <strong>Equitrust</strong>
            <span>Solutions</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#company">Company</a>
          <a href="#about">About us</a>
        </nav>
      </div>
    </header>
  );
}
