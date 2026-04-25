import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { catSection, catSteps } from "@/data/landingPage";

export default function CAT() {
  return (
    <SectionWrapper id="cat">
      <SectionHeading
        eyebrow={catSection.eyebrow}
        align="center"
        title={
          <>
            {catSection.title[0]} <span>{catSection.title[1]}</span>
          </>
        }
        description={
          <>
            {catSection.description[0]} <span>{catSection.description[1]}</span>{" "}
            {catSection.description[2]}
          </>
        }
      />

      <div className="cat-layout">
        <Card className="cat-overview">
          <span className="cat-overview__label">{catSection.overview.label}</span>
          <h3>{catSection.overview.title}</h3>
          <p>{catSection.overview.description}</p>

          <div className="cat-overview__stats">
            {catSection.overview.stats.map((item) => (
              <div key={item.label} className="cat-overview__stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <ul className="cat-overview__highlights">
            {catSection.overview.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <div className="cat-grid">
          {catSteps.map((item, index) => (
            <Card
              key={item.step}
              className={`cat-step ${index === 0 ? "cat-step--featured" : ""}`}
            >
              <img src={item.imageSrc} alt={item.imageAlt} className="cat-step__image" />
              <div className="cat-step__content">
                <div className="cat-step__header">
                  <span className="cat-step__tag">{item.tag}</span>
                  <span className="cat-step__number">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul className="cat-step__list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="cat-step__meta">
                  <div>
                    <span>Ideal for</span>
                    <p>{item.audience}</p>
                  </div>
                  <div>
                    <span>Why it helps</span>
                    <p>{item.outcome}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
