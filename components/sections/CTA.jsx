"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ctaContent } from "@/data/landingPage";
import {
  INQUIRY_INITIAL_VALUES,
  INQUIRY_TEAM_SIZE_OPTIONS,
  validateInquiry,
} from "@/lib/inquiries";
import { submitInquiry } from "@/lib/api";

const inquiryTextFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Aditi Sharma",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Acme Global Services",
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "team@company.com",
  },
];

export default function CTA() {
  const [form, setForm] = useState(INQUIRY_INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function validateForm() {
    const nextErrors = validateInquiry(form);
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      const response = await submitInquiry(form);

      setStatus("success");
      setMessage(response.message);
      setErrors({});
      setForm(INQUIRY_INITIAL_VALUES);
    } catch (error) {
      setErrors(error.errors ?? {});
      setStatus("error");
      setMessage("Your enquiry could not be submitted right now.");
    }
  }

  return (
    <SectionWrapper id="cta">
      <Card className="cta-card">
        <div className="cta-layout">
          <div className="cta-layout__content">
            <span className="eyebrow">{ctaContent.eyebrow}</span>
            <h2>{ctaContent.title}</h2>
            <p>{ctaContent.description}</p>

            <ul className="cta-layout__list">
              {ctaContent.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <img
              src={ctaContent.imageSrc}
              alt={ctaContent.imageAlt}
              className="cta-layout__image"
            />
          </div>

          <form className="cta-form" onSubmit={handleSubmit} noValidate>
            <div className="cta-form__grid">
              {inquiryTextFields.map((field) => {
                const errorId = `cta-${field.name}-error`;

                return (
                  <label key={field.name} className="field">
                    <span>{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={errors[field.name] ? errorId : undefined}
                    />
                    {errors[field.name] ? (
                      <small id={errorId} className="field-error">
                        {errors[field.name]}
                      </small>
                    ) : null}
                  </label>
                );
              })}
            </div>

            <label className="field">
              <span>Team Size</span>
              <select
                name="teamSize"
                value={form.teamSize}
                onChange={handleChange}
                aria-invalid={Boolean(errors.teamSize)}
                aria-describedby={errors.teamSize ? "cta-size-error" : undefined}
              >
                <option value="">Select a range</option>
                {INQUIRY_TEAM_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.teamSize ? (
                <small id="cta-size-error" className="field-error">
                  {errors.teamSize}
                </small>
              ) : null}
            </label>

            <label className="field">
              <span>Capability Goal</span>
              <textarea
                name="goal"
                value={form.goal}
                onChange={handleChange}
                placeholder="Example: build AI readiness for operations managers across two business units."
                rows={4}
                aria-invalid={Boolean(errors.goal)}
                aria-describedby={errors.goal ? "cta-goal-error" : undefined}
              />
              {errors.goal ? (
                <small id="cta-goal-error" className="field-error">
                  {errors.goal}
                </small>
              ) : null}
            </label>

            <div className="cta__actions">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Request a Consultation"}
              </Button>
              <Button as="a" href="#home" variant="ghost">
                Back to top
              </Button>
            </div>

            {message ? (
              <p
                className={status === "error" ? "form-feedback form-feedback--error" : "form-success"}
                role="status"
              >
                {message}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="form-feedback">
                The local API is now accepting enquiries at <code>/api/inquiries</code>.
              </p>
            ) : null}
          </form>
        </div>
      </Card>
    </SectionWrapper>
  );
}
