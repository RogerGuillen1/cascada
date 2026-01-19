import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView } from "react-native";
import { ThemedText } from "../themed-text";
import Modal from "./modal";

const Info = ({ visible, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} onClose={onClose}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.title}>{t("info.title")}</ThemedText>

        <ThemedText style={styles.text}>{t("info.step1")}</ThemedText>

        <Image
          source={require("../../assets/images/circle.png")}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            marginVertical: 10,
          }}
        />

        <ThemedText style={styles.text}>{t("info.step2")}</ThemedText>

        <ThemedText style={styles.text}>{t("info.step3")}</ThemedText>

        <ThemedText style={styles.text}>{t("info.step4")}</ThemedText>

        <Pressable onPress={onClose} style={styles.button}>
          <ThemedText style={[styles.text, { fontWeight: "bold" }]}>
            {t("info.close")}
          </ThemedText>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};

export default Info;

const styles = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    margin: 25,
  },
  text: {
    textAlign: "center",
    fontSize: 17.5,
  },
  button: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
};
