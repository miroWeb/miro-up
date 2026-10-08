"use client";

import {
  Users,
  Boxes,
  Globe,
  Send,
  MessageSquare,
  BrainCircuit,
  Smartphone,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SERVICE_ICONS: LucideIcon[] = [
  Users,
  Boxes,
  Globe,
  Send,
  MessageSquare,
  BrainCircuit,
  Smartphone,
  Puzzle,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="xizmatlar" className="relative bg-white py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-brand">
            {t.services.eyebrow}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            {t.services.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {t.services.items.map(({ title, description }, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-brand to-brand-light transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-ink">{title}</h3>
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
