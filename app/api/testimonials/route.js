import { NextResponse } from "next/server";

const testimonials = [
  {
    id: 1,
    quote:
      "The workshops were structured around our business context, which made adoption faster across product, analytics, and operations.",
    name: "Meera Joshi",
    role: "Learning Lead, Fintech Enterprise",
    avatarSrc: "/avatar-meera.svg",
  },
  {
    id: 2,
    quote:
      "Accredian helped us move from scattered upskilling initiatives to a focused capability roadmap with clear executive visibility.",
    name: "Rohan Khanna",
    role: "Head of Transformation, Global Services Firm",
    avatarSrc: "/avatar-rohan.svg",
  },
  {
    id: 3,
    quote:
      "From leadership cohorts to practitioner tracks, the delivery felt modular, measurable, and easy to roll out at scale.",
    name: "Aparna Sen",
    role: "HRBP, Technology Organization",
    avatarSrc: "/avatar-aparna.svg",
  },
];

export async function GET() {
  return NextResponse.json(testimonials);
}
