"use client";

import { useEffect } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} data-reveal>
      {children}
    </div>
  );
}
