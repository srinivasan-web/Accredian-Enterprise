import Card from "@/components/ui/Card";
import { footerContent, footerLinks } from "@/data/landingPage";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Card className="cta-card site-footer__card">
          <div className="footer-grid">
            <div>
              <span className="section-kicker">Accredian Enterprise</span>
              <h3>{footerContent.title}</h3>
              <p>{footerContent.description}</p>
              <div className="site-footer__meta">
                {footerContent.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <h3>Quick Links</h3>
              <div className="site-footer__links">
                {footerLinks.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3>Contact</h3>
              <ul className="footer-list">
                <li>enterprise@accredian.com</li>
                <li>+91 98765 43210</li>
                <li>Gurugram, Haryana, India</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="site-footer__bottom">
          Copyright 2026 Accredian Enterprise. Reference-inspired redesign for a
          cleaner enterprise learning experience.
        </div>
      </div>
    </footer>
  );
}
