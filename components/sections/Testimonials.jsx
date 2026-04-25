"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Skeleton from "@/components/ui/Skeleton";
import { getTestimonials } from "@/lib/api";

const testimonialSkeletonItems = [1, 2, 3];

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function loadTestimonials() {
    setIsLoading(true);

    try {
      const data = await getTestimonials();

      setItems(data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    let ignore = false;

    async function initializeTestimonials() {
      try {
        const data = await getTestimonials();

        if (!ignore) {
          setItems(data);
          setHasError(false);
        }
      } catch (error) {
        if (!ignore) {
          setHasError(true);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    void initializeTestimonials();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        title={
          <>
            What Enterprise Teams <span>Say</span>
          </>
        }
        description="Social proof presented in a cleaner, more visual format so the page feels closer to the Accredian reference experience."
      />

      <div className="section-actions">
        <Button type="button" variant="ghost" onClick={loadTestimonials}>
          Refresh Testimonials
        </Button>
      </div>

      {isLoading ? (
        <div className="testimonial-grid">
          {testimonialSkeletonItems.map((item) => (
            <Skeleton key={item} className="testimonial-card testimonial-card--skeleton">
              <div className="skeleton-line skeleton-line--label" />
              <div className="skeleton-line skeleton-line--body" />
              <div className="skeleton-line skeleton-line--body" />
              <div className="skeleton-line skeleton-line--title" />
              <div className="skeleton-line skeleton-line--meta" />
            </Skeleton>
          ))}
        </div>
      ) : null}

      {!isLoading && hasError ? (
        <Card className="testimonials-state">
          Testimonials could not be loaded right now.
          <div className="testimonials-state__actions">
            <Button type="button" onClick={loadTestimonials}>
              Try Again
            </Button>
          </div>
        </Card>
      ) : null}

      {!isLoading && !hasError ? (
        <div className="testimonial-grid">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className={`testimonial-card ${index === 0 ? "testimonial-card--featured" : ""}`}
            >
              <div className="testimonial-card__person">
                <img
                  src={item.avatarSrc}
                  alt={`${item.name} avatar`}
                  className="testimonial-card__avatar"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <span className="testimonial-card__quote-mark">"</span>
              <p>"{item.quote}"</p>
            </Card>
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}
