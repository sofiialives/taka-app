import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEN from "./en.json";
import translationUA from "./ua.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ua",
  resources,
});

export default i18n;
