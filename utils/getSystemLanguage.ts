import * as Localization from "expo-localization";

const SUPPORTED_LANGUAGES = ["en", "es", "ca"];

export const getSystemLanguage = () => {
  try {
    const locales = Localization.getLocales();
    console.log(locales);

    if (!locales || locales.length === 0) {
      return "en";
    }

    const languageCode = locales[0].languageCode; // "en", "es", "ca"

    return SUPPORTED_LANGUAGES.includes(languageCode) ? languageCode : "en";
  } catch (e) {
    return "en";
  }
};
