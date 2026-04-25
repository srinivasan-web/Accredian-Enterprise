import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Edge from "@/components/sections/Edge";
import CAT from "@/components/sections/CAT";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const pageSections = [
  Hero,
  Stats,
  Clients,
  Edge,
  CAT,
  Process,
  FAQ,
  Testimonials,
  CTA,
];

export default function HomePage() {
  return (
    <main>
      {pageSections.map((Section) => (
        <Section key={Section.name} />
      ))}
    </main>
  );
}
