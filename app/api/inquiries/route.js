import { NextResponse } from "next/server";
import { normalizeInquiry, validateInquiry } from "@/lib/inquiries";

const inquiries = [];

export async function GET() {
  return NextResponse.json({
    count: inquiries.length,
    inquiries,
  });
}

export async function POST(request) {
  const payload = await request.json();
  const errors = validateInquiry(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const inquiry = {
    id: inquiries.length + 1,
    ...normalizeInquiry(payload),
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(inquiry);

  return NextResponse.json({
    message: "Inquiry submitted successfully.",
    inquiry,
  });
}
