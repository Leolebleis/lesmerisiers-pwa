import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend"

i18n
  .use(initReactI18next)
  .use(detector)
  .use(backend)
  .init({
    fallbackLng: "fr",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"]
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
