"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/routing";

const copy = {
  ja: {
    name: "お名前",
    email: "メールアドレス",
    message: "ご相談内容",
    submit: "送信する",
    sending: "送信中…",
    success: "お問い合わせを受け付けました。",
    error: "送信できませんでした。時間をおいて、もう一度お試しください。",
    privacy: "入力いただいた情報は、お問い合わせへの対応に使用します。",
  },
  en: {
    name: "Name",
    email: "Email",
    message: "Project details",
    submit: "Send enquiry",
    sending: "Sending…",
    success: "Your enquiry has been received.",
    error: "The message could not be sent. Please try again later.",
    privacy: "The information you provide is used to respond to your enquiry.",
  },
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="name">{c.name}</label>
      <input
        id="name"
        name="name"
        autoComplete="name"
        required
        maxLength={100}
      />
      <label htmlFor="email">{c.email}</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
      />
      <label htmlFor="message">{c.message}</label>
      <textarea
        id="message"
        name="message"
        required
        minLength={10}
        maxLength={5000}
        rows={7}
      />
      <p className="form-note">{c.privacy}</p>
      <button className="button button-primary" disabled={status === "sending"}>
        {status === "sending" ? c.sending : c.submit}
      </button>
      <p role="status" className="form-status">
        {status === "success" ? c.success : status === "error" ? c.error : ""}
      </p>
    </form>
  );
}
