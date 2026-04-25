"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/landingPage";
import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <header className={cn("site-nav", isScrolled && "site-nav--scrolled")}>
      <div className="container site-nav__inner">
        <a href="#home" className="site-brand" aria-label="Accredian Enterprise home">
          <div className="site-brand__text">
            <strong>accredian</strong>
            <span>credentials that matter</span>
          </div>
        </a>

        <span className="site-nav__eyebrow">For Business</span>

        <button
          type="button"
          className="site-nav__toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={cn("site-nav__links", isMenuOpen && "is-open")}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(activeSection === link.id && "is-active")}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
