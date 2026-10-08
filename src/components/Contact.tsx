"use client";

import { useState, type ElementType, type FormEvent } from "react";
import { Send, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { useLanguage } from "@/i18n/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t, locale } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const CONTACT_ITEMS: { icon: ElementType; label: string; value: string; href: string }[] = [
    {
      icon: Send,
      label: t.contact.itemLabels.telegram,
      value: "@miro_coder",
      href: "https://t.me/miro_coder",
    },
    {
      icon: Phone,
      label: t.contact.itemLabels.phone,
      value: "+998 99 999 80 84",
      href: "tel:+998999998084",
    },
    {
      icon: InstagramIcon,
      label: t.contact.itemLabels.instagram,
      value: "@miro.up",
      href: "https://instagram.com/miro.up",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
      locale,
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || t.contact.form.errorGeneric);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t.contact.form.errorGeneric);
    }
  };

  return (
    <section id="aloqa" className="relative bg-white py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div>
          <span className="text-[13px] font-semibold uppercase tracking-wider text-brand">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-slate">
            {t.contact.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition-colors hover:border-brand/30 hover:bg-brand-tint/30">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <Icon className="size-4.5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-medium text-slate">{label}</p>
                    <p className="text-[15px] font-semibold text-ink">{value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-ink/10 bg-brand-tint/30 p-6 sm:p-8"
        >
          {/* honeypot field — hidden from real users, bots tend to fill every input */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                {t.contact.form.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.form.namePlaceholder}
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="contact" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                {t.contact.form.phoneLabel}
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                inputMode="tel"
                required
                placeholder="+998 99 999 80 84"
                pattern="^\+?[0-9\s\-()]{9,}$"
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                {t.contact.form.servicesLabel}
              </label>
              <select
                id="service"
                name="service"
                defaultValue={t.contact.serviceOptions[0]}
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-brand"
              >
                {t.contact.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                {t.contact.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" && <Loader2 className="size-4 animate-spin" />}
            {status === "loading" ? t.contact.form.submitting : t.contact.form.submit}
          </button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 text-[13.5px] font-medium text-emerald-600">
              <CheckCircle2 className="size-4" />
              {t.contact.form.success}
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 flex items-center gap-2 text-[13.5px] font-medium text-red-600">
              <AlertCircle className="size-4" />
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
