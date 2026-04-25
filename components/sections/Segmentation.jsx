import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { segments } from "@/data/landingPage";

export default function Segmentation() {
  return (
    <SectionWrapper id="segmentation">
      <SectionHeading
        eyebrow="Course Segmentation"
        title="One structure, four ways to tailor the same learning engine."
        description="Program, industry, topic, and level segmentation make the system legible to stakeholders and flexible for delivery teams."
      />

      <div className="segmentation-grid">
        {segments.map((segment) => (
          <Card key={segment.title} className="segmentation-card">
            <h3>{segment.title}</h3>
            <ul className="segmentation__items">
              {segment.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
