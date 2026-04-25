import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { audiences } from "@/data/landingPage";

export default function Audience() {
  return (
    <SectionWrapper id="audience">
      <SectionHeading
        eyebrow="Who Should Join"
        title="Audience coverage that spans role depth, team type, and leadership seniority."
        description="This view helps buyers understand exactly where the program fits across the organization."
      />

      <div className="audience-grid">
        {audiences.map((audience, index) => (
          <Card key={audience.title} className="audience-card">
            <span className="section-kicker">0{index + 1}</span>
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
