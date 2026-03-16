import emailjs from "@emailjs/browser";

export interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    publicKey
  );
}
