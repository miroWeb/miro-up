"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, Bot, Bell } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -top-10 left-[-15%] h-[420px] w-[420px] rounded-full bg-brand-light/10 blur-[110px]" />

      <div className="container-px relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-ink-soft shadow-sm backdrop-blur">
            <Image
              src="/images/icon.png"
              alt=""
              width={20}
              height={20}
              className="size-5 rounded-full"
            />
            {t.hero.badge}
          </div>

          <h1 className="text-balance mt-6 text-[2.5rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
            {t.hero.titlePre}{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-balance mt-6 max-w-xl text-[17px] leading-relaxed text-slate sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#aloqa"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand hover:shadow-lg hover:shadow-brand/25"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#xizmatlar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.03]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-11 flex flex-wrap gap-2.5">
            {t.hero.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-ink/10 bg-brand-tint/60 px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* visual mockup */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="animate-float relative">
            <div className="relative rotate-[2deg] rounded-3xl border border-ink/10 bg-white/90 p-5 shadow-[0_30px_80px_-20px_rgba(11,15,26,0.35)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/70" />
                  <span className="size-2.5 rounded-full bg-amber-400/70" />
                  <span className="size-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-[11px] font-semibold text-slate">
                  {t.hero.mockup.dashboardLabel}
                </span>
              </div>

              <div className="mt-5 flex items-end gap-2.5 rounded-2xl bg-brand-tint/50 p-4">
                {[38, 62, 48, 80, 56, 94, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md bg-gradient-to-t from-brand to-brand-light"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-3.5">
                <div>
                  <p className="text-[11px] font-medium text-slate">
                    {t.hero.mockup.growthLabel}
                  </p>
                  <p className="text-xl font-semibold text-ink">+128%</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <TrendingUp className="size-5" />
                </div>
              </div>
            </div>

            <div className="absolute -left-10 bottom-6 flex items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-xl shadow-ink/10">
              <div className="flex size-9 items-center justify-center rounded-full bg-brand text-white">
                <Bot className="size-4.5" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-ink">
                  {t.hero.mockup.chatbotLabel}
                </p>
                <p className="flex items-center gap-1 text-[11px] text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {t.hero.mockup.chatbotStatus}
                </p>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 flex items-center gap-2 rounded-2xl border border-ink/10 bg-white px-3.5 py-2.5 shadow-xl shadow-ink/10">
              <Bell className="size-4 text-brand" />
              <p className="text-[12px] font-medium text-ink">
                {t.hero.mockup.notification}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
