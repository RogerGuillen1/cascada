import InfoIcon from "@/assets/images/InfoIcon";
import TranslateIcon from "@/assets/images/TranslateIcon";
import Info from "@/components/common/info";
import Language from "@/components/common/language";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

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

        <Pressable onPress={() => router.push("/game")}>
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
};
