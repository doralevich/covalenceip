"use server";

import { site } from "@/lib/site";

export type ContactState = { status: "idle" | "sent" | "error"; message?: string };

const field = (data: FormData, name: string, max: number) =>
  String(data.get(name) ?? "")
    .trim()
    .slice(0, max);

export async function sendContact(
  _prev: ContactState,
  data: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see this field. The WordPress site was
  // already a spam target, so bots get a fake success and nothing is sent.
  if (field(data, "company_website", 200)) return { status: "sent" };

  const name = field(data, "name", 200);
  const email = field(data, "email", 200);
  const phone = field(data, "phone", 50);
  const message = field(data, "message", 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Please enter your name, a valid email address and a message.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY is not set");
    return {
      status: "error",
      message: `Sorry, the form isn't working right now. Please email ${site.email}.`,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Covalence IP Website <onboarding@resend.dev>",
      to: [site.contactTo],
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("contact form: Resend returned", res.status, await res.text());
    return {
      status: "error",
      message: `Sorry, your message couldn't be sent. Please email ${site.email}.`,
    };
  }

  return { status: "sent" };
}
