"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  try {
    // Placeholder for sending email
    console.log("Form submitted successfully:");
    console.log(validatedFields.data);
    
    return { message: "Thank you for your message! I'll get back to you soon.", errors: {} };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { message: "An unexpected error occurred. Please try again later.", errors: {} };
  }
}
