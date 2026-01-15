import BackArrow from "@/assets/images/BackArrow";
import InfoIcon from "@/assets/images/InfoIcon";
import Info from "@/components/common/info";
import Card from "@/components/game/card";
import CardInstruction from "@/components/game/cardInstruction";
import { ThemedView } from "@/components/themed-view";
import cardRoutes from "@/constants/cardRoutes";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Game = () => {
  const [pal, setPal] = useState<string>("spades");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [openInfo, setOpenInfo] = useState(false);

  const router = useRouter();
  const insets = useSafeAreaInsets();
  const topSpace = insets.top + 30;

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Pressable
        style={[styles.backButton, { top: topSpace }]}
        onPress={() => router.push("/")}
      >
        <BackArrow size={45} color="gray" />
      </Pressable>
      <Pressable
        style={[styles.infoiconbox, { top: topSpace }]}
        onPress={() => setOpenInfo(true)}
      >
        <InfoIcon size={50} color="gray" />
      </Pressable>
      <ThemedView style={styles.container}>
        {cardRoutes.poker[pal].map((cardSrc, index) => (
          <Pressable key={index} onPress={() => setSelectedCard(index)}>
            <Card imageSrc={cardSrc} key={index} />
          </Pressable>
        ))}
      </ThemedView>
      <CardInstruction
        card={
          selectedCard !== null ? cardRoutes.poker[pal][selectedCard] : null
        }
        visible={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
      />
      {openInfo && (
        <Info visible={openInfo} onClose={() => setOpenInfo(false)} />
      )}
    </SafeAreaView>
  );
};

export default Game;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
  },
  backButton: {
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
