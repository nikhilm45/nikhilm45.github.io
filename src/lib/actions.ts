"use client";

export async function submitContactForm(formData: FormData) {
  const response = await fetch("https://formspree.io/f/your-form-id", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return { message: "Thank you for your message! I'll get back to you soon.", errors: {} };
  } else {
    return { message: "Something went wrong. Please try again later.", errors: {} };
  }
}