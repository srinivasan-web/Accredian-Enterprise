import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { stats, statsIntro } from "@/data/landingPage";

export default function Stats() {
  return (
    <SectionWrapper id="stats">
      <div className="stats-layout">
        <Card className="stats-feature">
          <div className="stats-feature__copy">
            <span className="section-kicker">{statsIntro.eyebrow}</span>
            <h2>{statsIntro.title}</h2>
            <p>{statsIntro.description}</p>

            <div className="stats-feature__process">
              {statsIntro.process.map((item) => (
                <div key={item.step} className="stats-feature__process-item">
                  <span>{item.step}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="stats-feature__highlights">
              {statsIntro.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="stats-feature__media">
            <span className="stats-feature__media-badge">{statsIntro.mediaBadge}</span>
            <img
              src={statsIntro.imageSrc}
              alt={statsIntro.imageAlt}
              className="stats-feature__image"
            />
          </div>
        </Card>

        <div className="stats-grid">
          {stats.map((item) => (
            <Card key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
