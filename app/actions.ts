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

  const apiKey = process.env.MANDRILL_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    console.error("contact form: MANDRILL_API_KEY or CONTACT_FROM_EMAIL is not set");
    return {
      status: "error",
      message: `Sorry, the form isn't working right now. Please email ${site.email}.`,
    };
  }

  const failed: ContactState = {
    status: "error",
    message: `Sorry, your message couldn't be sent. Please email ${site.email}.`,
  };

  // Mandrill answers 200 with a per-recipient status even when it refuses to
  // send (e.g. the from address isn't on a verified sending domain), so the
  // HTTP status alone isn't enough.
  let result: unknown;
  try {
    const res = await fetch("https://mandrillapp.com/api/1.0/messages/send.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: apiKey,
        message: {
          from_email: fromEmail,
          from_name: "Covalence IP Website",
          to: site.contactTo.map((email) => ({ email, type: "to" })),
          // A separate copy per inbox, so neither sees the other address.
          preserve_recipients: false,
          headers: { "Reply-To": email },
          subject: `Website inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "-"}`,
            "",
            message,
          ].join("\n"),
        },
      }),
    });
    result = await res.json();
  } catch (err) {
    console.error("contact form: Mandrill request failed", err);
    return failed;
  }

  // One entry per recipient. The visitor's message counts as delivered if any
  // inbox got it; a partial rejection is logged so it can be fixed.
  const recipients = Array.isArray(result)
    ? (result as { email?: string; status?: string; reject_reason?: string | null }[])
    : [];
  const delivered = recipients.filter((r) =>
    ["sent", "queued", "scheduled"].includes(r.status ?? ""),
  );
  if (delivered.length < site.contactTo.length) {
    console.error("contact form: Mandrill did not send to every recipient", JSON.stringify(result));
  }
  if (delivered.length === 0) return failed;

  return { status: "sent" };
}
