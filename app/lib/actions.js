"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormFormat = z.object({
  userName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(50, { message: "Username cannot exceed 50 characters" }),
  email: z.string().email({ message: "Enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
  phoneNumber: z
    .string()
    .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: "Enter a valid phone number",
    })
    .max(15, { message: "Phone number cannot exceed 15 characters" }),
});
const SendMessage = FormFormat.omit({ phoneNumber: true });
const ContactSupport = FormFormat;

// Send Contact us Message
export async function sendMessage(prevState, formData) {
  // Validate fields with zord
  const validatedFields = SendMessage.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  // If form validation fials, returns errors early. Otherwise, continue
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to Send Message",
    };
  }
  try {
    //
  } catch (error) {
    console.log(error);
  }
}

// Contact Support
export async function contactSupport(prevState, formData) {
  // Validate fields with zord
  const validatedFields = ContactSupport.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email"),
    message: formData.get("message"),
    phoneNumber: formData.get("phoneNumber"),
  });
  // If form validation fials, returns errors early. Otherwise, continue
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to submit",
    };
  }
  try {
    //
  } catch (error) {
    console.log(error);
  }
}
