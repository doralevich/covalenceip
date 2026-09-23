"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";

const input =
  "w-full rounded-[5px] bg-[#eeeeee] px-4 py-3 text-[14px] text-[#4e4e4e] outline-none placeholder:text-[#999] focus:ring-2 focus:ring-brand/40";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContact,
    { status: "idle" },
  );

  if (state.status === "sent") {
    return (
      <p role="status" className="py-10 text-center text-base text-[#333]">
        Thanks for your message. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="sr-only" htmlFor="cf-name">Name</label>
      <input id="cf-name" name="name" required placeholder="Name" autoComplete="name" className={input} />
      <label className="sr-only" htmlFor="cf-email">Email</label>
      <input id="cf-email" name="email" type="email" required placeholder="Email" autoComplete="email" className={input} />
      <label className="sr-only" htmlFor="cf-phone">Phone</label>
      <input id="cf-phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={input} />
      <label className="sr-only" htmlFor="cf-message">Message</label>
      <textarea id="cf-message" name="message" required rows={5} placeholder="Message" className={input} />
      <div aria-hidden className="absolute left-[-9999px]">
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-700">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-[3px] border-2 border-brand px-6 py-2 text-lg font-medium text-brand transition-colors hover:bg-brand hover:text-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
