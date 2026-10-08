export type Locale = "uz" | "ru";

export const LOCALES: Locale[] = ["uz", "ru"];

export type Dictionary = {
  nav: {
    services: string;
    process: string;
    whyUs: string;
    contact: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pills: string[];
    mockup: {
      dashboardLabel: string;
      growthLabel: string;
      chatbotLabel: string;
      chatbotStatus: string;
      notification: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    points: { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    steps: { title: string; description: string }[];
  };
  ctaSection: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    itemLabels: { telegram: string; phone: string; instagram: string };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      servicesLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      errorGeneric: string;
    };
    serviceOptions: string[];
  };
  footer: {
    description: string;
    servicesHeading: string;
    companyHeading: string;
    contactHeading: string;
    servicesLinks: string[];
    copyright: string;
    tagline: string;
  };
};

const uz: Dictionary = {
  nav: {
    services: "Xizmatlar",
    process: "Jarayon",
    whyUs: "Nega biz",
    contact: "Aloqa",
    cta: "Bepul konsultatsiya",
    menuLabel: "Menyu",
  },
  hero: {
    badge: "Miro Up — IT xizmatlar agentligi",
    titlePre: "Biznesingiz uchun",
    titleHighlight: "zamonaviy IT yechimlar",
    subtitle:
      "CRM va ERP tizimlaridan tortib, veb-sayt, Telegram bot, AI chatbot va AI agentlargacha — Miro Up jamoasi biznesingizni to'liq raqamlashtirib, avtomatlashtirib beradi.",
    ctaPrimary: "Loyihani boshlash",
    ctaSecondary: "Xizmatlarni ko'rish",
    pills: [
      "CRM",
      "ERP",
      "Veb-sayt",
      "Telegram bot",
      "AI Chatbot",
      "AI Agent",
      "Mobil ilova",
    ],
    mockup: {
      dashboardLabel: "Miro Up · CRM Dashboard",
      growthLabel: "Oylik o'sish",
      chatbotLabel: "AI Chatbot",
      chatbotStatus: "Faol",
      notification: "Yangi buyurtma",
    },
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Biznesingizni o'stirish uchun kerakli barcha IT yechimlar",
    subtitle:
      "Strategiyadan tortib ishga tushirish va qo'llab-quvvatlashgacha — har bir yechimni biznesingiz maqsadlariga moslab quramiz.",
    items: [
      {
        title: "CRM tizimlari",
        description:
          "Mijozlar bazasi, savdo voronkasi va menejerlar ishini bitta tizimda avtomatlashtiramiz.",
      },
      {
        title: "ERP tizimlari",
        description:
          "Ombor, moliya, kadrlar va ishlab chiqarishni yagona raqamli tizimga birlashtiramiz.",
      },
      {
        title: "Veb-saytlar",
        description:
          "Tezkor, zamonaviy dizaynli korporativ sayt va landing page'larni ishlab chiqamiz.",
      },
      {
        title: "Telegram botlar",
        description:
          "Buyurtma qabul qilish, to'lov va mijozlar bilan muloqotni avtomatlashtiruvchi botlar.",
      },
      {
        title: "AI Chatbot",
        description:
          "Mijozlaringizga 24/7 tezkor va aniq javob beradigan sun'iy intellektli suhbat botlari.",
      },
      {
        title: "AI Agent",
        description:
          "Jarayonlarni mustaqil tahlil qilib, qaror qabul qiladigan aqlli raqamli yordamchilar.",
      },
      {
        title: "Mobil ilovalar",
        description:
          "iOS va Android uchun tezkor, qulay va zamonaviy interfeysli mobil ilovalar yaratamiz.",
      },
      {
        title: "Individual yechimlar",
        description:
          "Biznesingizning o'ziga xos ehtiyojlariga moslashtirilgan maxsus dasturiy ta'minot.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Nega biz",
    title: "Texnologiya bilan biznesni tushunadigan jamoa",
    subtitle:
      "Miro Up — sizning biznesingiz jarayonlarini chuqur tahlil qilib, aynan shu ehtiyojga mos IT yechim quradigan hamkor.",
    cta: "Biz bilan ishlashni boshlang",
    points: [
      {
        title: "Tezkor va aniq",
        description:
          "Loyihani qisqa muddatda, aniq texnik topshiriq va shaffof rejalashtirish asosida ishga tushiramiz.",
      },
      {
        title: "Individual yondashuv",
        description:
          "Har bir tizimni tayyor shablon emas, aynan biznesingiz jarayonlariga moslab loyihalaymiz.",
      },
      {
        title: "Zamonaviy texnologiyalar",
        description:
          "AI va zamonaviy dasturlash stack'laridan foydalanib, uzoq muddatga chidamli tizimlar quramiz.",
      },
      {
        title: "To'liq hamrohlik",
        description:
          "Ishga tushirishdan keyin ham texnik yordam ko'rsatamiz va tizimni birga rivojlantiramiz.",
      },
    ],
  },
  process: {
    eyebrow: "Jarayon",
    title: "Qanday ishlaymiz",
    subtitle:
      "Birinchi muloqotdan tizim ishga tushgunga qadar — har bir bosqich shaffof va tushunarli.",
    stepLabel: "Qadam",
    steps: [
      {
        title: "Konsultatsiya",
        description:
          "Biznesingiz va ehtiyojlaringizni tushunish uchun bepul konsultatsiya o'tkazamiz.",
      },
      {
        title: "Tahlil va reja",
        description:
          "Jarayonlarni tahlil qilib, aniq texnik topshiriq va loyiha rejasini tuzamiz.",
      },
      {
        title: "Dizayn va ishlab chiqish",
        description:
          "Zamonaviy texnologiyalar yordamida tizimni bosqichma-bosqich quramiz.",
      },
      {
        title: "Ishga tushirish",
        description:
          "Tizimni ishga tushiramiz va doimiy texnik yordam hamda rivojlantirishni davom ettiramiz.",
      },
    ],
  },
  ctaSection: {
    title: "Loyihangizni muhokama qilishga tayyormisiz?",
    subtitle:
      "Bepul konsultatsiya orqali biznesingiz uchun eng mos IT yechimni birgalikda aniqlaymiz.",
    primary: "Bog'lanish",
    secondary: "Telegram orqali yozing",
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Loyihangiz haqida gaplashamiz",
    subtitle:
      "Formani to'ldiring yoki quyidagi kanallar orqali to'g'ridan-to'g'ri murojaat qiling — 24 soat ichida javob beramiz.",
    itemLabels: {
      telegram: "Telegram",
      phone: "Telefon",
      instagram: "Instagram",
    },
    form: {
      nameLabel: "Ismingiz",
      namePlaceholder: "Ism Familiya",
      phoneLabel: "Telefon raqami",
      servicesLabel: "Qiziqtirgan xizmat",
      messageLabel: "Loyiha haqida qisqacha",
      messagePlaceholder: "Biznesingiz va qanday yechim kerakligi haqida yozing...",
      submit: "Xabarni yuborish",
      submitting: "Yuborilmoqda...",
      success: "Xabaringiz yuborildi — tez orada siz bilan bog'lanamiz!",
      errorGeneric: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    },
    serviceOptions: [
      "CRM tizimi",
      "ERP tizimi",
      "Veb-sayt",
      "Telegram bot",
      "AI Chatbot",
      "AI Agent",
      "Mobil ilova",
      "Boshqa / Suhbatlashib aniqlashtiramiz",
    ],
  },
  footer: {
    description:
      "CRM, ERP, veb-sayt, Telegram bot, AI chatbot, AI agent va mobil ilovalar — biznesingiz uchun to'liq IT ekotizim.",
    servicesHeading: "Xizmatlar",
    companyHeading: "Kompaniya",
    contactHeading: "Aloqa",
    servicesLinks: [
      "CRM tizimlari",
      "ERP tizimlari",
      "AI Chatbot & Agent",
      "Veb va mobil ilovalar",
    ],
    copyright: "Miro Up. Barcha huquqlar himoyalangan.",
    tagline: "Biznesingizni raqamlashtiramiz.",
  },
};

const ru: Dictionary = {
  nav: {
    services: "Услуги",
    process: "Процесс",
    whyUs: "Почему мы",
    contact: "Контакты",
    cta: "Бесплатная консультация",
    menuLabel: "Меню",
  },
  hero: {
    badge: "Miro Up — агентство IT-услуг",
    titlePre: "Современные IT-решения",
    titleHighlight: "для вашего бизнеса",
    subtitle:
      "От CRM и ERP систем до веб-сайтов, Telegram-ботов, AI-чат-ботов и AI-агентов — команда Miro Up полностью оцифрует и автоматизирует ваш бизнес.",
    ctaPrimary: "Начать проект",
    ctaSecondary: "Смотреть услуги",
    pills: [
      "CRM",
      "ERP",
      "Веб-сайт",
      "Telegram-бот",
      "AI-чат-бот",
      "AI-агент",
      "Мобильное приложение",
    ],
    mockup: {
      dashboardLabel: "Miro Up · CRM Дашборд",
      growthLabel: "Рост за месяц",
      chatbotLabel: "AI Chatbot",
      chatbotStatus: "Активен",
      notification: "Новый заказ",
    },
  },
  services: {
    eyebrow: "Услуги",
    title: "Все IT-решения, необходимые для роста вашего бизнеса",
    subtitle:
      "От стратегии до запуска и поддержки — каждое решение мы создаём под цели именно вашего бизнеса.",
    items: [
      {
        title: "CRM-системы",
        description:
          "Автоматизируем клиентскую базу, воронку продаж и работу менеджеров в единой системе.",
      },
      {
        title: "ERP-системы",
        description:
          "Объединяем склад, финансы, кадры и производство в единую цифровую систему.",
      },
      {
        title: "Веб-сайты",
        description:
          "Разрабатываем быстрые корпоративные сайты и лендинги с современным дизайном.",
      },
      {
        title: "Telegram-боты",
        description:
          "Боты для приёма заказов, оплаты и автоматизации общения с клиентами.",
      },
      {
        title: "AI-чат-боты",
        description:
          "Чат-боты на основе ИИ, которые быстро и точно отвечают вашим клиентам 24/7.",
      },
      {
        title: "AI-агенты",
        description:
          "Умные цифровые помощники, которые самостоятельно анализируют процессы и принимают решения.",
      },
      {
        title: "Мобильные приложения",
        description:
          "Создаём быстрые и удобные мобильные приложения для iOS и Android с современным интерфейсом.",
      },
      {
        title: "Индивидуальные решения",
        description:
          "Специальное программное обеспечение, адаптированное под особые потребности вашего бизнеса.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Почему мы",
    title: "Команда, которая разбирается и в технологиях, и в бизнесе",
    subtitle:
      "Miro Up — партнёр, который глубоко анализирует процессы вашего бизнеса и создаёт IT-решение именно под эту потребность.",
    cta: "Начните работу с нами",
    points: [
      {
        title: "Быстро и чётко",
        description:
          "Запускаем проект в короткие сроки на основе чёткого техзадания и прозрачного планирования.",
      },
      {
        title: "Индивидуальный подход",
        description:
          "Проектируем каждую систему не по готовому шаблону, а под процессы именно вашего бизнеса.",
      },
      {
        title: "Современные технологии",
        description:
          "Используем ИИ и современные технологии разработки, чтобы создавать надёжные системы на долгий срок.",
      },
      {
        title: "Полное сопровождение",
        description:
          "Оказываем техническую поддержку и после запуска, развивая систему вместе с вами.",
      },
    ],
  },
  process: {
    eyebrow: "Процесс",
    title: "Как мы работаем",
    subtitle:
      "От первого контакта до запуска системы — каждый этап прозрачен и понятен.",
    stepLabel: "Шаг",
    steps: [
      {
        title: "Консультация",
        description:
          "Проводим бесплатную консультацию, чтобы понять ваш бизнес и потребности.",
      },
      {
        title: "Анализ и план",
        description:
          "Анализируем процессы и составляем чёткое техническое задание и план проекта.",
      },
      {
        title: "Дизайн и разработка",
        description:
          "Поэтапно создаём систему с использованием современных технологий.",
      },
      {
        title: "Запуск",
        description:
          "Запускаем систему и продолжаем техническую поддержку и развитие.",
      },
    ],
  },
  ctaSection: {
    title: "Готовы обсудить ваш проект?",
    subtitle:
      "На бесплатной консультации вместе подберём лучшее IT-решение для вашего бизнеса.",
    primary: "Связаться",
    secondary: "Написать в Telegram",
  },
  contact: {
    eyebrow: "Контакты",
    title: "Обсудим ваш проект",
    subtitle:
      "Заполните форму или свяжитесь напрямую через каналы ниже — ответим в течение 24 часов.",
    itemLabels: {
      telegram: "Telegram",
      phone: "Телефон",
      instagram: "Instagram",
    },
    form: {
      nameLabel: "Ваше имя",
      namePlaceholder: "Имя Фамилия",
      phoneLabel: "Номер телефона",
      servicesLabel: "Интересующая услуга",
      messageLabel: "Коротко о проекте",
      messagePlaceholder: "Расскажите о бизнесе и какое решение нужно...",
      submit: "Отправить сообщение",
      submitting: "Отправка...",
      success: "Сообщение отправлено — скоро свяжемся с вами!",
      errorGeneric: "Произошла ошибка. Попробуйте снова.",
    },
    serviceOptions: [
      "CRM-система",
      "ERP-система",
      "Веб-сайт",
      "Telegram-бот",
      "AI-чат-бот",
      "AI-агент",
      "Мобильное приложение",
      "Другое / Уточним при общении",
    ],
  },
  footer: {
    description:
      "CRM, ERP, веб-сайты, Telegram-боты, AI-чат-боты, AI-агенты и мобильные приложения — полная IT-экосистема для вашего бизнеса.",
    servicesHeading: "Услуги",
    companyHeading: "Компания",
    contactHeading: "Контакты",
    servicesLinks: [
      "CRM-системы",
      "ERP-системы",
      "AI-чат-боты и агенты",
      "Веб и мобильные приложения",
    ],
    copyright: "Miro Up. Все права защищены.",
    tagline: "Мы оцифровываем ваш бизнес.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { uz, ru };
