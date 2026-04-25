import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { heroContent } from "@/data/landingPage";

export default function Hero() {
  return (
    <SectionWrapper id="home" className="hero">
      <div className="hero__grid">
        <Reveal immediate>
          <Card className="hero__content">
            <span className="hero__eyebrow">{heroContent.eyebrow}</span>
            <h1>
              {heroContent.titleLines.map(([base, accent]) => (
                <span key={base} className="hero__title-line">
                  {base} <span>{accent}</span>
                </span>
              ))}
            </h1>
            <p>{heroContent.description}</p>

            <ul className="hero__highlights">
              {heroContent.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hero__actions">
              <Button as="a" href="#cta">
                {heroContent.ctaLabel}
              </Button>
              <Button as="a" href="#process" variant="ghost">
                Explore Delivery Model
              </Button>
            </div>

            <div className="hero__stats">
              {heroContent.stats.map((item) => (
                <div key={item.label} className="hero__stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={120} immediate>
          <Card className="hero__panel">
            <img
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              className="hero__image"
            />
            <div className="hero__floating-card">
              <span>{heroContent.floatingCard.label}</span>
              <h3>{heroContent.floatingCard.title}</h3>
              <p>{heroContent.floatingCard.description}</p>
              <ul>
                {heroContent.floatingCard.metrics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
