import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients, clientsSection } from "@/data/landingPage";

export default function Clients() {
  return (
    <SectionWrapper id="clients">
      <div className="clients-layout">
        <div className="clients-copy">
          <SectionHeading
            title={
              <>
                {clientsSection.title[0]} <span>{clientsSection.title[1]}</span>
              </>
            }
            description={
              <>
                {clientsSection.description[0]} <span>{clientsSection.description[1]}</span>
              </>
            }
          />
          <p className="clients-copy__highlight">{clientsSection.highlight}</p>
          <div className="clients-copy__badges">
            {clientsSection.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <div className="logo-strip">
          {clients.map((client) => (
            <div key={client.name} className="logo-pill">
              <img src={client.logoSrc} alt={client.logoAlt} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
