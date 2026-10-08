import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miro Up — Biznesingiz uchun IT yechimlar",
  description:
    "Miro Up — CRM, ERP, veb-saytlar, Telegram botlar, AI chatbot va AI agentlar, mobil ilovalar. Biznesingizni raqamlashtiramiz va avtomatlashtiramiz.",
  keywords: [
    "Miro Up",
    "IT agentlik",
    "CRM tizim",
    "ERP tizim",
    "veb-sayt yaratish",
    "Telegram bot",
    "AI chatbot",
    "AI agent",
    "mobil ilova",
  ],
  openGraph: {
    title: "Miro Up — Biznesingiz uchun IT yechimlar",
    description:
      "CRM, ERP, veb-saytlar, Telegram botlar, AI chatbot va AI agentlar, mobil ilovalar — bitta jamoada.",
    siteName: "Miro Up",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
