const root = document.documentElement;

root.classList.add("js");

const languageButton = document.querySelector(".header__lang-switch");
const langOptions = document.querySelectorAll(".header__lang-switch-option");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const revealTargets = document.querySelectorAll(
  "main > section:not(.hero), .projects__card",
);
const skillCategories = document.querySelectorAll(".skills__category");
const mobileSkillsQuery = window.matchMedia("(max-width: 600px)");
const header = document.querySelector(".header");

const translations = {
  ru: {
    siteTitle: "Портфолио",
    description:
      "Full-stack разработчик ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ создаёт интерфейсы, API, базы данных и digital-продукты, которые помогают бизнесу расти и автоматизировать процессы.",
    keywords:
      "full-stack developer, веб-разработка, frontend, backend, портфолио, ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ, разработка веб-продуктов",
    ogTitle: "ЛИПИХИН СЕМЁН АЛЕКСЕЕВИЧ | Full-stack разработчик",
    ogDescription:
      "Создаю веб-продукты, интерфейсы, API и внутренние системы, которые поддерживают бизнес и улучшают пользовательский опыт.",
    canonical: "https://example.com/",
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
    siteTitle: "Portfolio",
    description:
      "Full-stack developer LIPIKHIN SEMEN ALEKSEEVICH creates interfaces, APIs, databases, and digital products that help businesses grow, automate processes, and improve user experience.",
    keywords:
      "full-stack developer, web development, frontend, backend, portfolio, LIPIKHIN SEMEN ALEKSEEVICH, digital products",
    ogTitle: "LIPIKHIN SEMEN ALEKSEEVICH | Full-stack developer",
    ogDescription:
      "I build digital products, interfaces, APIs, and solutions that support business goals and improve user experience.",
    canonical: "https://example.com/",
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

let previousScrollY = window.scrollY;
let headerFrame = 0;

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

const updateHeader = () => {
  if (!header) {
    return;
  }

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 24 || currentScrollY < previousScrollY - 4) {
    header.classList.remove("header--hidden");
  } else if (currentScrollY > previousScrollY + 4) {
    header.classList.add("header--hidden");
  }

  previousScrollY = currentScrollY;
};

const handleHeaderScroll = () => {
  if (!header || headerFrame) {
    return;
  }

  headerFrame = window.requestAnimationFrame(() => {
    headerFrame = 0;
    updateHeader();
  });
};

if (header) {
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
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

if (revealTargets.length) {
  if ("IntersectionObserver" in window) {
    const revealVisibleTargets = () => {
      revealTargets.forEach((element) => {
        const bounds = element.getBoundingClientRect();

        if (bounds.top < window.innerHeight * 1.15 && bounds.bottom > -80) {
          element.classList.add("is-visible");
        }
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("scroll-reveal");

      if (element.classList.contains("projects__card")) {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
      }

      revealObserver.observe(element);
    });

    let scrollFrame = 0;

    const handleScroll = () => {
      if (scrollFrame) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        revealVisibleTargets();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    revealVisibleTargets();
  } else {
    revealTargets.forEach((element) => {
      element.classList.add("scroll-reveal", "is-visible");
    });
  }
}
