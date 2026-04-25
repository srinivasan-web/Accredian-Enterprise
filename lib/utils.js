export function cn(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

export function getOptionByValue(options, value) {
  return options.find((option) => option.value === value) ?? null;
}

export function formatOrdinalStep(value) {
  return String(value).padStart(2, "0");
}
