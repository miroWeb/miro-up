import { NextResponse } from "next/server";

type Locale = "uz" | "ru";

type ContactPayload = {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this
  locale?: string;
};

const ERRORS: Record<Locale, { badRequest: string; missingFields: string; notConfigured: string; sendFailed: string }> = {
  uz: {
    badRequest: "Noto'g'ri so'rov",
    missingFields: "Ism va telefon raqami kiritilishi shart",
    notConfigured: "Forma hali sozlanmagan. Birozdan so'ng qayta urinib ko'ring.",
    sendFailed: "Xabarni yuborib bo'lmadi. Keyinroq urinib ko'ring.",
  },
  ru: {
    badRequest: "Некорректный запрос",
    missingFields: "Укажите имя и номер телефона",
    notConfigured: "Форма пока не настроена. Попробуйте позже.",
    sendFailed: "Не удалось отправить сообщение. Попробуйте позже.",
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  let locale: Locale = "uz";

  try {
    body = await request.json();
    if (body.locale === "ru") locale = "ru";
  } catch {
    return NextResponse.json({ error: ERRORS.uz.badRequest }, { status: 400 });
  }

  const err = ERRORS[locale];
  const { name, contact, service, message, company } = body;

  // Honeypot: bots fill every field, including this hidden one. Pretend success.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json({ error: err.missingFields }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID .env.local faylida sozlanmagan"
    );
    return NextResponse.json({ error: err.notConfigured }, { status: 500 });
  }

  // Internal lead notification always goes to the team in Uzbek, regardless
  // of which language the visitor used on the site.
  const lines = [
    "📩 <b>Miro Up — yangi murojaat</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(name.trim())}`,
    `📞 <b>Telefon:</b> ${escapeHtml(contact.trim())}`,
    service ? `🧩 <b>Xizmat:</b> ${escapeHtml(service.trim())}` : null,
    message?.trim() ? `💬 <b>Xabar:</b>\n${escapeHtml(message.trim())}` : null,
    `🌐 <b>Til:</b> ${locale.toUpperCase()}`,
  ].filter(Boolean);

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          parse_mode: "HTML",
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("Telegram API error:", errText);
      return NextResponse.json({ error: err.sendFailed }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (sendErr) {
    console.error("Telegram so'rovida xatolik:", sendErr);
    return NextResponse.json({ error: err.sendFailed }, { status: 502 });
  }
}
