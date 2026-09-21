import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Company from "@/components/Company";
import Directors from "@/components/Directors";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Ticker />
      <Company />
      <Directors />
    </main>
  );
}
