import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={cn("section", "section-shell", className)}>
      <Reveal className="container">{children}</Reveal>
    </section>
  );
}
