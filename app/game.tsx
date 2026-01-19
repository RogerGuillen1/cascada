import BackArrow from "@/assets/images/BackArrow";
import InfoIcon from "@/assets/images/InfoIcon";
import Info from "@/components/common/info";
import Card from "@/components/game/card";
import CardInstruction from "@/components/game/cardInstruction";
import { ThemedView } from "@/components/themed-view";
import cardRoutes from "@/constants/cardRoutes";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Game = () => {
  const params = useLocalSearchParams<{ pal?: string }>();

  const [pal, setPal] = useState<string>(params.pal || "poker");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [openInfo, setOpenInfo] = useState(false);
  const [cardsList, setCardsList] = useState<string[]>([]);

  const pals = {
    poker: ["spades", "hearts", "clubs", "diamonds"],
    espanyola: ["bastos", "copes", "espases", "oros"],
  };

  useEffect(() => {
    const options = pals[pal];
    const random = options[Math.floor(Math.random() * options.length)];
    setCardsList(cardRoutes[pal][random]);
  }, [pal]);

  const router = useRouter();
  const insets = useSafeAreaInsets();
  const topSpace = insets.top + 20;

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Pressable
        style={[styles.backButton, { top: topSpace + 5 }]}
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
        {cardsList.map((cardSrc, index) => (
          <Pressable key={index} onPress={() => setSelectedCard(index)}>
            <Card imageSrc={cardSrc} key={index} />
          </Pressable>
        ))}
      </ThemedView>
      {selectedCard !== null && (
        <CardInstruction
          pal={pal}
          card={selectedCard}
          visible={selectedCard !== null}
          onClose={() => setSelectedCard(null)}
        />
      )}
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
