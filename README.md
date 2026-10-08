# Miro Up — Landing Page

Miro Up IT agentligi uchun landing page. Next.js 16 + Tailwind CSS 4.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) ni oching.

## Kontakt formasini sozlash (Telegram)

Sahifadagi "Aloqa" formasi to'ldirilganda xabar sizning Telegram guruhingizga/kanalingizga bot orqali yuboriladi. Ishga tushirish uchun 2 ta narsa kerak: **bot token** va **chat ID**.

### 1. Bot token olish

1. Telegram'da [@BotFather](https://t.me/BotFather) ni oching
2. `/newbot` buyrug'ini yuboring, bot nomini kiriting (masalan, `Miro Up Leads Bot`)
3. BotFather sizga token beradi, masalan: `123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`

### 2. Chat ID olish

1. Botni xabarlar tushishini xohlagan Telegram guruhingizga qo'shing (yoki shaxsiy chatda o'zingizga yuboring)
2. Guruhga istalgan xabar yozing
3. Brauzerda quyidagi manzilni oching (TOKEN o'rniga o'z tokeningizni qo'ying):
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
4. Natijada chiqqan JSON ichidan `"chat":{"id": -1001234567890, ...}` qatorini toping — shu raqam sizning `chat_id`. Guruhlarda odatda manfiy (`-`) raqam bo'ladi.

### 3. `.env.local` faylini to'ldirish

Loyiha papkasida `.env.local` fayli bor, ichiga quyidagicha yozing:

```
TELEGRAM_BOT_TOKEN=123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw
TELEGRAM_CHAT_ID=-1001234567890
```

Serverni qayta ishga tushiring (`npm run dev`) — forma endi shu guruhga xabar yuboradi.

### Production (Vercel va h.k.) uchun

Vercelga deploy qilganda, loyihaning **Settings → Environment Variables** bo'limiga xuddi shu ikkita qiymatni (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`) qo'shing — `.env.local` fayli serverga ko'tarilmaydi (git bilan commit qilinmaydi), shuning uchun bu qadam shart.

## Kontakt ma'lumotlarini yangilash

Sayt bo'ylab ko'rsatilgan kontaktlar (Telegram: `@miro_coder`, telefon: `+998 99 999 80 84`) quyidagi fayllarda saqlanadi — kerak bo'lsa shu yerlardan o'zgartiring:

- `src/components/Contact.tsx` — Telegram, telefon
- `src/components/Footer.tsx` — Telegram, telefon
- `src/components/CTASection.tsx` — Telegram havolasi

## Loyiha tuzilishi

- `src/app/page.tsx` — barcha bo'limlarni yig'adigan asosiy sahifa
- `src/components/` — Navbar, Hero, Services, WhyUs, Process, CTASection, Contact, Footer
- `src/app/api/contact/route.ts` — kontakt formasini Telegramga yuboruvchi API
- `public/images/` — logo fayllari