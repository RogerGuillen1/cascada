import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { getSystemLanguage } from "@/utils/getSystemLanguage";
import ca from "./locales/ca/translation.json";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import { getLanguage, saveLanguage } from "./storage/langage";

export const initI18n = async () => {
  const savedLanguage = await getLanguage();
  const systemLanguage = getSystemLanguage();

  const languageToUse = savedLanguage || systemLanguage || "en";

  await i18n.use(initReactI18next).init({
    resources: {
      ca: { translation: ca },
      es: { translation: es },
      en: { translation: en },
    },
    lng: languageToUse,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  if (!savedLanguage) {
    await saveLanguage(languageToUse);
  }
};

export default i18n;
