import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGE_KEY = "APP_LANGUAGE";

export const saveLanguage = async (lang: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  } catch (e) {
    console.log("Error saving language", e);
  }
};

export const getLanguage = async () => {
  try {
    return await AsyncStorage.getItem(LANGUAGE_KEY);
  } catch (e) {
    console.log("Error loading language", e);
    return null;
  }
};
