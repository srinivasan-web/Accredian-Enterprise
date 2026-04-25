"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqSupport, faqs } from "@/data/landingPage";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq">
      <div className="faq-layout">
        <div className="faq-aside">
          <SectionHeading
            eyebrow="FAQs"
            title={
              <>
                Enterprise Buying <span>Questions</span>
              </>
            }
            description="Clear answers to the operational, delivery, and customization questions stakeholders usually ask first."
          />
          <Card className="faq-support">
            <span className="section-kicker">{faqSupport.eyebrow}</span>
            <h3>{faqSupport.title}</h3>
            <p>{faqSupport.description}</p>
            <ul>
              {faqSupport.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Card key={faq.question} className="faq-item">
                <button
                  className="faq-trigger"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{faq.question}</span>
                  <strong>{isOpen ? "-" : "+"}</strong>
                </button>

                <div
                  className={`faq-panel-wrap ${isOpen ? "is-open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <div id={`faq-panel-${index}`} className="faq-panel">
                    {faq.answer}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
