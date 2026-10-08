"use client";

import Image from "next/image";
import { Send, Phone } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { useLanguage } from "@/i18n/LanguageContext";

const CURRENT_YEAR = 2026;

export default function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t.nav.process, href: "#jarayon" },
    { label: t.nav.whyUs, href: "#nega-biz" },
    { label: t.nav.contact, href: "#aloqa" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-10">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-px relative">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <Image
              src="/images/logo-full-dark.png"
              alt="Miro Up"
              width={867}
              height={357}
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/55">
              {t.footer.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://t.me/miro_coder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-white"
                aria-label="Telegram"
              >
                <Send className="size-4" />
              </a>
              <a
                href="https://instagram.com/miro.up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/40">
              {t.footer.servicesHeading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.servicesLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#xizmatlar"
                    className="text-[14.5px] text-white/65 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/40">
              {t.footer.companyHeading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14.5px] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/40">
              {t.footer.contactHeading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://t.me/miro_coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14.5px] text-white/65 transition-colors hover:text-white"
                >
                  <Send className="size-4" />
                  @miro_coder
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/miro.up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14.5px] text-white/65 transition-colors hover:text-white"
                >
                  <InstagramIcon className="size-4" />
                  @miro.up
                </a>
              </li>
              <li>
                <a
                  href="tel:+998999998084"
                  className="flex items-center gap-2 text-[14.5px] text-white/65 transition-colors hover:text-white"
                >
                  <Phone className="size-4" />
                  +998 99 999 80 84
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-[13.5px] text-white/40">
            © {CURRENT_YEAR} {t.footer.copyright}
          </p>
          <p className="text-[13.5px] text-white/40">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
