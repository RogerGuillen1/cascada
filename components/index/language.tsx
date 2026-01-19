import { changeLanguage } from "@/utils/changeLanguage";
import { useTranslation } from "react-i18next";
import { Image, Pressable } from "react-native";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const Language = ({ visible, onClose }) => {
  const { t } = useTranslation();
  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedView style={styles.box}>
        <ThemedText style={styles.title}>{t("language")}</ThemedText>
        <Pressable
          style={styles.button}
          onPress={() => {
            changeLanguage("ca");
          }}
        >
          <Image
            style={styles.flag}
            source={require("../../assets/images/banderes/cat.png")}
          />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            changeLanguage("es");
          }}
        >
          <Image
            style={styles.flag}
            source={require("../../assets/images/banderes/esp.png")}
          />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            changeLanguage("en");
          }}
        >
          <Image
            style={styles.flag}
            source={require("../../assets/images/banderes/eng.png")}
          />
        </Pressable>
      </ThemedView>
    </Modal>
  );
};
export default Language;

const styles = {
  box: {
    padding: 10,
    gap: 15,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  flag: {
    width: 150,
    height: 80,
    resizeMode: "stretch",
  },
};
