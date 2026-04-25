import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/landingPage";
import { formatOrdinalStep } from "@/lib/utils";

export default function Process() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title={
          <>
            Structured <span>Enterprise Rollout</span>
          </>
        }
        description="A simple four-step process that turns capability goals into practical delivery, measurement, and scaled adoption."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <Card key={step.title} className="process-card">
            <img
              src={step.imageSrc}
              alt={step.imageAlt}
              className="process-card__image"
            />
            <span className="process-card__step">Step {formatOrdinalStep(index + 1)}</span>
            <span className="process-card__note">{step.note}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
