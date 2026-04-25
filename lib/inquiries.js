export const INQUIRY_INITIAL_VALUES = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  goal: "",
};

export const INQUIRY_TEAM_SIZE_OPTIONS = [
  { value: "1-25", label: "1-25 learners" },
  { value: "26-100", label: "26-100 learners" },
  { value: "100+", label: "100+ learners" },
];

export function validateInquiry(payload) {
  const errors = {};

  if (!payload.name?.trim()) {
    errors.name = "Name is required.";
  }

  if (!payload.email?.includes("@")) {
    errors.email = "Enter a valid work email.";
  }

  if (!payload.company?.trim()) {
    errors.company = "Company name is required.";
  }

  if (!payload.teamSize) {
    errors.teamSize = "Select a team size.";
  }

  if (!payload.goal?.trim()) {
    errors.goal = "Share the capability goal for this enquiry.";
  }

  return errors;
}

export function normalizeInquiry(payload) {
  return {
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company.trim(),
    teamSize: payload.teamSize,
    goal: payload.goal.trim(),
  };
}
