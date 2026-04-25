import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { domains } from "@/data/landingPage";

export default function Domain() {
  return (
    <SectionWrapper id="domain">
      <SectionHeading
        eyebrow="Solutions"
        title="A solution grid that maps directly to modern enterprise capability bets."
        description="Offerings are grouped in a way that feels structured for leadership teams and scalable for future expansion."
      />

      <div className="domain-grid">
        {domains.map((domain) => (
          <Card key={domain.title} className="domain-card">
            <h3>{domain.title}</h3>
            <p>{domain.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
