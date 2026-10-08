"use client";

import { Zap, Target, Cpu, Headset, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const POINT_ICONS: LucideIcon[] = [Zap, Target, Cpu, Headset];
const POINT_INDEXES = ["01", "02", "03", "04"];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="nega-biz" className="relative bg-brand-tint/40 py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-brand">
            {t.whyUs.eyebrow}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            {t.whyUs.title}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-slate">
            {t.whyUs.subtitle}
          </p>
          <a
            href="#aloqa"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand"
          >
            {t.whyUs.cta}
          </a>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10 lg:border-t-0">
          {t.whyUs.points.map(({ title, description }, i) => {
            const Icon = POINT_ICONS[i];
            return (
              <div
                key={title}
                className="group flex gap-5 py-7 first:pt-0 sm:gap-7"
              >
                <span className="hidden font-mono text-sm font-medium text-ink/25 sm:block sm:pt-1.5">
                  {POINT_INDEXES[i]}
                </span>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-ink/5 transition-colors group-hover:bg-ink group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-slate">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
