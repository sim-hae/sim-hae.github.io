(() => {
  "use strict";

  const translations = {
    ko: {
      pageTitle: "Simhae · Park Seo Hyun",
      pageDescription: "Simhae(Park Seo Hyun · 박서현) 프로필.",
      "aria.skip": "본문으로 건너가기",
      "aria.brand": "첫 화면으로 이동",
      "aria.nav": "주요 메뉴",
      "aria.language": "언어 선택",
      "aria.contacts": "연락처",
      "aria.profileAlt": "프로필 사진",
      "nav.about": "ABOUT",
      "nav.projects": "PROJECTS",
      "hero.label": "SECURITY · DFIR · CTF",
      "hero.role": "Security Researcher / CTF Player / Digital Forensics",
      "hero.aboutButton": "ABOUT ↓",
      "about.label": "ABOUT",
      "about.heading": "<span>About</span> Me",
      "about.summary": "",
      "about.awards": "Awards",
      "awards.defconFinalResult": "7위",
      "awards.sekaiResult": "7위",
      "awards.defconQualResult": "6위 · 본선 진출",
      "awards.tjctfResult": "1위",
      "awards.hspaceResult": "3위",
      "awards.lgTitle": "LG Aimers 7기 AI Hackathon",
      "awards.lgResult": "Finalist · 최종 19위",
      "awards.daeguResult": "2위",
      "about.activity": "Activity",
      "about.dreamhackPeriod": "현재",
      "about.dreamhackRank": "Forensics 분야 랭킹 1위",
      "about.sherpaDate": "2026.06 — 현재",
      "about.sherpaName": "DFIR Sherpa 1기",
      "about.sherpaRole": "디지털 포렌식 및 침해사고 대응 연구 커뮤니티",
      "about.unitDate": "2026.05 — 현재",
      "about.unitRole": "CTF · Forensics",
      "about.sineDate": "2026 — 현재",
      "about.sineName": "SINE · 서강대학교 정보보안학회",
      "about.sineRole": "교내 최초 신설 정보보안학회 · CTF Lead",
      "about.councilDate": "2025 — 현재",
      "about.councilTitle": "서강대학교 AI기반 자유전공학부 학생회장",
      "about.councilRole": "제1·2대 학생회장 연임",
      "about.mensaDate": "2025.02 — 현재",
      "about.mensaRole": "회원",
      "about.education": "Education",
      "about.sogangDate": "2025.03 — 현재",
      "about.sogangName": "서강대학교",
      "about.sogangDegree": "컴퓨터공학 학사과정 · 2학년",
      "about.unistDate": "2024 — 2025",
      "about.unistRole": "미래인재학부",
      "projects.label": "PROJECTS",
      "projects.sandboxFramework": "AI 코딩 에이전트의 샌드박스 행위 로그 연계 및 sLLM 기반 포렌식 타임라인 자동 재구성 프레임워크 개발",
      "projects.campusClassifier": "대학교 캠퍼스 이미지 분류 모델 개발",
      "projects.status": "수정 중입니다.",
      "footer.note": "프로필",
    },
    en: {
      pageTitle: "Simhae · Park Seo Hyun",
      pageDescription: "Profile of Simhae (Park Seo Hyun).",
      "aria.skip": "Skip to main content",
      "aria.brand": "Go to the landing section",
      "aria.nav": "Main navigation",
      "aria.language": "Language selector",
      "aria.contacts": "Contact links",
      "aria.profileAlt": "Profile photo",
      "nav.about": "ABOUT",
      "nav.projects": "PROJECTS",
      "hero.label": "SECURITY · DFIR · CTF",
      "hero.role": "Security Researcher / CTF Player / Digital Forensics",
      "hero.aboutButton": "ABOUT ↓",
      "about.label": "ABOUT",
      "about.heading": "<span>About</span> Me",
      "about.summary": "",
      "about.awards": "Awards",
      "awards.defconFinalResult": "7th Place",
      "awards.sekaiResult": "7th Place",
      "awards.defconQualResult": "6th Place · Qualified for Finals",
      "awards.tjctfResult": "1st Place",
      "awards.hspaceResult": "3rd Place",
      "awards.lgTitle": "LG Aimers 7th AI Hackathon",
      "awards.lgResult": "Finalist · 19th Place",
      "awards.daeguResult": "2nd Place",
      "about.activity": "Activity",
      "about.dreamhackPeriod": "Current",
      "about.dreamhackRank": "Ranked #1 in Forensics",
      "about.sherpaDate": "2026.06 — Present",
      "about.sherpaName": "DFIR Sherpa · 1st Cohort",
      "about.sherpaRole": "Digital forensics and incident response research community",
      "about.unitDate": "2026.05 — Present",
      "about.unitRole": "CTF · Forensics",
      "about.sineDate": "2026 — Present",
      "about.sineName": "SINE · Sogang University Cybersecurity Club",
      "about.sineRole": "Sogang University's first cybersecurity club · CTF Lead",
      "about.councilDate": "2025 — Present",
      "about.councilTitle": "President · Sogang University AI-based Interdisciplinary Studies Student Council",
      "about.councilRole": "Re-elected for the 1st and 2nd Student Councils",
      "about.mensaDate": "2025.02 — Present",
      "about.mensaRole": "Member",
      "about.education": "Education",
      "about.sogangDate": "2025.03 — Present",
      "about.sogangName": "Sogang University",
      "about.sogangDegree": "B.S. in Computer Science · Sophomore",
      "about.unistDate": "2024 — 2025",
      "about.unistRole": "School of Exploratory Studies",
      "projects.label": "PROJECTS",
      "projects.sandboxFramework": "Development of an sLLM-based framework for correlating AI coding-agent sandbox behavior logs and automatically reconstructing forensic timelines",
      "projects.campusClassifier": "University Campus Image Classification Model Development",
      "projects.status": "Work in progress.",
      "footer.note": "Profile",
    },
  };

  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const description = document.querySelector('meta[name="description"]');

  const getSavedLanguage = () => {
    try {
      return window.localStorage.getItem("profile-language");
    } catch {
      return null;
    }
  };

  const saveLanguage = (language) => {
    try {
      window.localStorage.setItem("profile-language", language);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  };

  const applyLanguage = (language, persist = true) => {
    const selected = language === "en" ? "en" : "ko";
    const copy = translations[selected];

    document.documentElement.lang = selected;
    document.title = copy.pageTitle;
    description?.setAttribute("content", copy.pageDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = copy[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = copy[element.dataset.i18nAriaLabel];
      if (value) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = copy[element.dataset.i18nAlt];
      if (value) element.setAttribute("alt", value);
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });

    if (persist) saveLanguage(selected);
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  applyLanguage(getSavedLanguage(), false);

  const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const navigationObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!current) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${current.target.id}`;
          if (isCurrent) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] }
    );

    navSections.forEach((section) => navigationObserver.observe(section));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
