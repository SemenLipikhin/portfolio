const languageButton = document.querySelector(".header__lang-switch");
const langOptions = document.querySelectorAll(".header__lang-switch-option");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const skillCategories = document.querySelectorAll(".skills__category");
const mobileSkillsQuery = window.matchMedia("(max-width: 600px)");

const translations = {
  ru: {
    siteTitle: "Семён Липихин | Full-stack разработчик",
    description:
      "Full-stack разработчик ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ создаёт интерфейсы, API, базы данных и digital-продукты, которые помогают бизнесу расти и автоматизировать процессы.",
    keywords:
      "full-stack developer, веб-разработка, frontend, backend, портфолио, ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ, разработка веб-продуктов",
    ogTitle: "ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ | Full-stack разработчик",
    ogDescription:
      "Создаю веб-продукты, интерфейсы, API и внутренние системы, которые поддерживают бизнес и улучшают пользовательский опыт.",
    canonical: "https://semenlipikhin.github.io/portfolio/",
    nav: {
      about: "ОБО МНЕ",
      skills: "НАВЫКИ",
      projects: "ПРОЕКТЫ",
      contact: "КОНТАКТЫ",
    },
    hero: {
      index: "01 / PORTFOLIO",
      name: "ЛИПИХИН<br />СЕМЁН АЛЕКСЕЕВИЧ",
      role: "FULL-STACK DEVELOPER",
      text: "Создаю веб-продукты, которые решают бизнес-задачи, улучшают пользовательский опыт и масштабируются вместе с командой.",
      buttonPrimary: "ПОСМОТРЕТЬ НАВЫКИ",
      buttonSecondary: "СВЯЗАТЬСЯ",
      tags: "WEB · PRODUCT · CODE",
    },
    about: {
      index: "02 / ОБО МНЕ",
      title: "Строю цифровые продукты, которые работают на результат",
      text: "Full-stack разработчик, который помогает компаниям превращать идеи в работающие веб-продукты: понятный интерфейс, надёжную архитектуру, API, базы данных и готовое решение под реальную задачу бизнеса.",
      metaFocusLabel: "ФОКУС",
      metaFocusValue: "Продуктовое мышление · Frontend · Backend · Database",
      metaApproachLabel: "ПОДХОД",
      metaApproachValue:
        "Результат для бизнеса · понятный код · прозрачная логика",
    },
    skills: {
      index: "03 / НАВЫКИ",
      title: "Технологии, с которыми работаю",
      frontend: "FRONTEND",
      backend: "BACKEND",
      database: "DATABASE",
      tools: "TOOLS",
    },
    projects: {
      index: "04 / ПРОЕКТЫ",
      title: "Мои проекты",
      subtitle:
        "В портфолио добавляю решения, которые показывают мой подход к продукту, качеству кода и работе в команде.",
      card1: {
        status: "ПРОЕКТ В РАЗРАБОТКЕ",
        desc: "Подготовка первого коммерчески ориентированного проекта с акцентом на UX, архитектуру и производительность.",
      },
      card2: {
        status: "БУДУЩИЙ ПРИМЕР РАБОТЫ",
        desc: "Следующие проекты будут демонстрировать процесс, design-решения и продуктовую логику.",
      },
      card4: {
        status: "LIPIKHIN / МАГАЗИН ОДЕЖДЫ",
        desc: "Адаптивная главная страница магазина одежды на React и Vite.",
        cta: "Открыть сайт",
      },
      card3: {
        status: "КОММЕРЧЕСКИЙ КЕЙС",
        desc: "Планирую добавлять задачи, где важно качество интерфейса, backend и пользовательский результат.",
      },
    },
    contact: {
      index: "05 / КОНТАКТЫ",
      title: "Готов обсуждать задачи, в которых смогу принести реальную пользу",
      text: "Открыт к стажировкам, проектной работе и ролям в web-разработке, где важны качество, ответственность и результат.",
    },
    footer: {
      copyright: "© 2026 ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ",
      role: "FULL-STACK DEVELOPER",
    },
  },
  en: {
    siteTitle: "Semen Lipikhin | Full-stack Developer",
    description:
      "Full-stack developer LIPIKHIN SEMEN ALEKSEEVICH creates interfaces, APIs, databases, and digital products that help businesses grow, automate processes, and improve user experience.",
    keywords:
      "full-stack developer, web development, frontend, backend, portfolio, LIPIKHIN SEMEN ALEKSEEVICH, digital products",
    ogTitle: "LIPIKHIN SEMEN ALEKSEEVICH | Full-stack developer",
    ogDescription:
      "I build digital products, interfaces, APIs, and solutions that support business goals and improve user experience.",
    canonical: "https://semenlipikhin.github.io/portfolio/",
    nav: {
      about: "ABOUT",
      skills: "SKILLS",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    hero: {
      index: "01 / PORTFOLIO",
      name: "LIPIKHIN<br />SEMEN ALEKSEEVICH",
      role: "FULL-STACK DEVELOPER",
      text: "I build web products that solve business problems, improve user experience, and grow with the team.",
      buttonPrimary: "VIEW SKILLS",
      buttonSecondary: "CONTACT",
      tags: "WEB · PRODUCT · CODE",
    },
    about: {
      index: "02 / ABOUT",
      title: "I build digital products that create real value",
      text: "Full-stack developer focused on turning ideas into working web products: clear interfaces, reliable architecture, APIs, databases, and solutions designed for real business needs.",
      metaFocusLabel: "FOCUS",
      metaFocusValue: "Product thinking · Frontend · Backend · Database",
      metaApproachLabel: "APPROACH",
      metaApproachValue: "Business value · clean code · clear logic",
    },
    skills: {
      index: "03 / SKILLS",
      title: "Technologies I work with",
      frontend: "FRONTEND",
      backend: "BACKEND",
      database: "DATABASE",
      tools: "TOOLS",
    },
    projects: {
      index: "04 / PROJECTS",
      title: "Selected Work",
      subtitle:
        "I am adding solutions to my portfolio that reflect my approach to product thinking, code quality, and collaboration.",
      card1: {
        status: "PROJECT IN PROGRESS",
        desc: "Preparing the first commercially oriented project with a focus on UX, architecture, and performance.",
      },
      card2: {
        status: "FUTURE WORK SAMPLE",
        desc: "Upcoming projects will demonstrate the process, design decisions, and product logic.",
      },
      card4: {
        status: "LIPIKHIN / CLOTHING STORE",
        desc: "A responsive clothing store homepage built with React and Vite.",
        cta: "Visit website",
      },
      card3: {
        status: "COMMERCIAL CASE",
        desc: "Adding work where user experience, backend quality, and product impact matter.",
      },
    },
    contact: {
      index: "05 / CONTACT",
      title: "Open to roles and projects where I can add real value",
      text: "Open to internships, freelance work, and web development roles where quality, responsibility, and outcomes matter.",
    },
    footer: {
      copyright: "© 2026 LIPIKHIN SEMEN ALEKSEEVICH",
      role: "FULL-STACK DEVELOPER",
    },
  },
};

const getNestedValue = (source, path) => {
  return path.split(".").reduce((value, key) => value?.[key], source);
};

const setMeta = (selector, attr, value) => {
  const metaNode = document.querySelector(selector);

  if (!metaNode) {
    return;
  }

  metaNode.setAttribute(attr, value);
};

const updateLanguage = (nextLang) => {
  const language = translations[nextLang] ? nextLang : "ru";
  const currentText = translations[language];

  document.documentElement.lang = language;
  document.title = currentText.siteTitle;
  setMeta('meta[name="description"]', "content", currentText.description);
  setMeta('meta[name="keywords"]', "content", currentText.keywords);
  setMeta('meta[property="og:title"]', "content", currentText.ogTitle);
  setMeta(
    'meta[property="og:description"]',
    "content",
    currentText.ogDescription,
  );
  setMeta(
    'meta[property="og:locale"]',
    "content",
    language === "ru" ? "ru_RU" : "en_US",
  );
  setMeta('link[rel="canonical"]', "href", currentText.canonical);

  i18nNodes.forEach((node) => {
    const value = getNestedValue(currentText, node.dataset.i18n);

    if (typeof value === "string") {
      node.innerHTML = value;
    }
  });

  if (languageButton) {
    const isRussian = language === "ru";
    languageButton.setAttribute(
      "aria-label",
      isRussian ? "Переключить язык" : "Switch language",
    );
    languageButton.setAttribute("aria-pressed", String(!isRussian));

    langOptions.forEach((option) => {
      const isCurrent = option.textContent.trim() === (isRussian ? "RU" : "EN");
      option.classList.toggle("is-active", isCurrent);
    });
  }
};

const savedLanguage = (() => {
  try {
    const saved = localStorage.getItem("portfolio-language");
    return saved === "en" ? "en" : "ru";
  } catch {
    return "ru";
  }
})();

const syncSkillCategories = () => {
  skillCategories.forEach((category) => {
    if (mobileSkillsQuery.matches) {
      category.removeAttribute("open");
      return;
    }

    category.setAttribute("open", "open");
  });
};

if (skillCategories.length) {
  syncSkillCategories();

  if (typeof mobileSkillsQuery.addEventListener === "function") {
    mobileSkillsQuery.addEventListener("change", syncSkillCategories);
  } else if (typeof mobileSkillsQuery.addListener === "function") {
    mobileSkillsQuery.addListener(syncSkillCategories);
  }
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "ru" ? "en" : "ru";

    updateLanguage(nextLanguage);

    try {
      localStorage.setItem("portfolio-language", nextLanguage);
    } catch {
      // ignore storage errors in private browsing or restricted environments
    }
  });
}

updateLanguage(savedLanguage);
