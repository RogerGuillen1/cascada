import gameInstructions from "@/constants/gameInstructions";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const CardInstruction = ({
  card,
  visible,
  onClose,
}: {
  card: string;
  visible: boolean;
  onClose: () => void;
}) => {
  console.log(card);
  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedView style={styles.box}>
        <ThemedText style={styles.title}>
          {gameInstructions[card].name}
        </ThemedText>
        <ThemedText style={styles.text}>
          {gameInstructions[card].description}
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
