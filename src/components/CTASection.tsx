"use client";

import { Send, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_65%_80%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[140px]" />

      <div className="container-px relative text-center">
        <h2 className="text-balance mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.15]">
          {t.ctaSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/60">
          {t.ctaSection.subtitle}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#aloqa"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
          >
            {t.ctaSection.primary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://t.me/miro_coder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Send className="size-4" />
            {t.ctaSection.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
