"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { plannerOptions } from "@/data/landingPage";
import { getOptionByValue } from "@/lib/utils";

const plannerFields = [
  {
    name: "audience",
    label: "Primary Audience",
    options: plannerOptions.audiences,
  },
  {
    name: "priority",
    label: "Business Priority",
    options: plannerOptions.priorities,
  },
  {
    name: "teamSize",
    label: "Team Size",
    options: plannerOptions.teamSizes,
  },
];

export default function Planner() {
  const [selection, setSelection] = useState({
    audience: plannerOptions.audiences[0].value,
    priority: plannerOptions.priorities[0].value,
    teamSize: plannerOptions.teamSizes[1].value,
  });

  const recommendation = {
    audience: getOptionByValue(plannerOptions.audiences, selection.audience),
    priority: getOptionByValue(plannerOptions.priorities, selection.priority),
    teamSize: getOptionByValue(plannerOptions.teamSizes, selection.teamSize),
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setSelection((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <SectionWrapper id="planner">
      <SectionHeading
        eyebrow="Program Planner"
        title="Turn high-level interest into a recommended rollout shape in a few clicks."
        description="This interactive planner gives buyers a lightweight, functional preview of how the offer changes by audience, business priority, and team size."
      />

      <div className="planner-grid">
        <Card className="planner-card">
          <div className="planner-form">
            {plannerFields.map((field) => (
              <label key={field.name} className="field">
                <span>{field.label}</span>
                <select
                  name={field.name}
                  value={selection[field.name]}
                  onChange={handleChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </Card>

        <Card className="planner-card planner-card--result">
          <span className="section-kicker">Recommended Path</span>
          <h3>{recommendation.audience?.recommendation}</h3>
          <p>{recommendation.priority?.lens}</p>

          <div className="planner-result-grid">
            <div>
              <span className="planner-label">Delivery model</span>
              <strong>{recommendation.audience?.delivery}</strong>
            </div>

            <div>
              <span className="planner-label">Suggested timeline</span>
              <strong>{recommendation.teamSize?.timeline}</strong>
            </div>

            <div>
              <span className="planner-label">Rollout format</span>
              <strong>{recommendation.teamSize?.format}</strong>
            </div>

            <div>
              <span className="planner-label">Expected outcome</span>
              <strong>{recommendation.audience?.outcome}</strong>
            </div>
          </div>

          <div className="cta__actions">
            <Button as="a" href="#cta">
              Use This In My Enquiry
            </Button>
            <Button as="a" href="#process" variant="ghost">
              Review Delivery Process
            </Button>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
