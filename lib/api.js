async function requestJson(path, options = {}) {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

export async function getTestimonials() {
  try {
    return await requestJson("/api/testimonials");
  } catch {
    throw new Error("Failed to load testimonials");
  }
}

export async function submitInquiry(payload) {
  return requestJson("/api/inquiries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
