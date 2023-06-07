module.exports = {
  locales: ["default", "fr", "en"],
  defaultLocale: "default",
  localeDetection: false,
  defaultNS: "common",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (lang, ns) => {
    if (lang === "default") return {};
    return import(`./locales/${ns}/${lang}.json`).then((res) => res.default);
  },
};
