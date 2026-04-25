import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { edgeItems, edgeSection } from "@/data/landingPage";

export default function Edge() {
  return (
    <SectionWrapper id="edge">
      <SectionHeading
        align="center"
        title={
          <>
            {edgeSection.title[0]} <span>{edgeSection.title[1]}</span>
          </>
        }
        description={
          <>
            {edgeSection.description[0]} <span>{edgeSection.description[1]}</span>
          </>
        }
      />

      <div className="edge-grid">
        {edgeItems.map((item, index) => (
          <Card key={item.title} className={`edge-card edge-card--${item.accent}`}>
            <img src={item.imageSrc} alt={item.imageAlt} className="edge-card__image" />
            <div className="edge-card__body">
              <span className="edge-card__index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
