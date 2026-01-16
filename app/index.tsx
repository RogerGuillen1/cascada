import InfoIcon from "@/assets/images/InfoIcon";
import TranslateIcon from "@/assets/images/TranslateIcon";
import Info from "@/components/common/info";
import Language from "@/components/common/language";
import StartGame from "@/components/index/startGame";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openStartGame, setOpenStartGame] = useState(false);

  const router = useRouter();
  const insets = useSafeAreaInsets();
  const topSpace = insets.top + 20;

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Pressable
        style={[styles.translateiconbox, { top: topSpace }]}
        onPress={() => setOpenLanguage(true)}
      >
        <TranslateIcon size={50} color="gray" />
      </Pressable>

      <Pressable
        style={[styles.infoiconbox, { top: topSpace }]}
        onPress={() => setOpenInfo(true)}
      >
        <InfoIcon size={50} color="gray" />
      </Pressable>

      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>La cascada</ThemedText>
        <Image
          source={require("../assets/images/circle.png")}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            marginVertical: 10,
          }}
        />
        <Pressable onPress={() => setOpenStartGame(true)} style={styles.button}>
          <ThemedText>Començar</ThemedText>
        </Pressable>
      </ThemedView>
      {openInfo && (
        <Info visible={openInfo} onClose={() => setOpenInfo(false)} />
      )}
      {openLanguage && (
        <Language
          visible={openLanguage}
          onClose={() => setOpenLanguage(false)}
        />
      )}
      {openStartGame && (
        <StartGame
          visible={openStartGame}
          onClose={() => setOpenStartGame(false)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    gap: 72,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  translateiconbox: {
    position: "absolute",
    left: 20,
    zIndex: 10,
  },
  infoiconbox: {
    position: "absolute",
    right: 20,
    zIndex: 10,
  },
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
