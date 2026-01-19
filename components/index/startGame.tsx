import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import RadioOption from "./radioOption";
import { useTranslation } from "react-i18next";

const StartGame = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [pal, setPal] = useState<string>("poker");

  const goToGame = () => {
    onClose();
    router.push({
      pathname: "/game",
      params: {
        pal: pal,
      },
    });
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedView style={{ alignItems: "center", gap: 30 }}>
        <ThemedText style={{ fontSize: 18, fontWeight: "bold" }}>
          {t("startGame.title")}
        </ThemedText>

        <RadioOption
          value="poker"
          label={t("startGame.poker")}
          selected={pal === "poker"}
          onPress={() => setPal("poker")}
        />

        <RadioOption
          value="spanish"
          label={t("startGame.spanish")}
          selected={pal === "espanyola"}
          onPress={() => setPal("espanyola")}
        />

        <Pressable onPress={goToGame} style={styles.button}>
          <ThemedText>{t("startGame.start")}</ThemedText>
        </Pressable>
      </ThemedView>
    </Modal>
  );
};

export default StartGame;

const styles = {
  button: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
};
