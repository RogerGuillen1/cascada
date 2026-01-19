import i18n from "@/src/i18n";
import { saveLanguage } from "@/src/storage/langage";

export const changeLanguage = async (lang: string) => {
  await i18n.changeLanguage(lang);
  await saveLanguage(lang);
};
