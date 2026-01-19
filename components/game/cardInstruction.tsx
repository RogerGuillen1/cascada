import gameInstructions from "@/constants/gameInstructions";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { useTranslation } from "react-i18next";

const CardInstruction = ({
  pal,
  card,
  visible,
  onClose,
}: {
  pal: string;
  card: number;
  visible: boolean;
  onClose: () => void;
}) => {
  const { t } = useTranslation();

  const instructions =
    pal !== "poker"
      ? gameInstructions.filter((_, index) => index !== 2)
      : gameInstructions;

  const cardKey = instructions[card].key;

  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedView style={styles.box}>
        <ThemedText style={styles.title}>
          {t(`cards.${cardKey}.name`)}
        </ThemedText>

        <ThemedText style={styles.text}>
          {t(`cards.${cardKey}.description`)}
        </ThemedText>
      </ThemedView>
    </Modal>
  );
};

export default CardInstruction;

const styles = {
  box: {
    padding: 10,
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
  },
};
