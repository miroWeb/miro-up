"use client";

import { PhoneCall, ClipboardList, Code2, Rocket, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const STEP_ICONS: LucideIcon[] = [PhoneCall, ClipboardList, Code2, Rocket];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="jarayon" className="relative bg-white py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-brand">
            {t.process.eyebrow}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            {t.process.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t border-dashed border-ink/15 lg:block" />

          {t.process.steps.map(({ title, description }, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={title} className="relative">
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-ink text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="mt-5 block font-mono text-[13px] font-medium text-brand">
                  {t.process.stepLabel} {i + 1}
                </span>
                <h3 className="mt-1.5 text-[17px] font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
