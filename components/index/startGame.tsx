import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import RadioOption from "./radioOption";

const StartGame = ({ visible, onClose }) => {
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
          Selecciona el model de cartes
        </ThemedText>
        <RadioOption
          label="Baralla de Poker"
          selected={pal === "poker"}
          onPress={() => setPal("poker")}
        />
        <RadioOption
          label="Baralla espanyola"
          selected={pal === "espanyola"}
          onPress={() => setPal("espanyola")}
        />
        <Pressable onPress={goToGame} style={styles.button}>
          <ThemedText>Començar</ThemedText>
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
