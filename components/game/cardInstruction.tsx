import gameInstructions from "@/constants/gameInstructions";
import Modal from "../common/modal";
import { ThemedText } from "../themed-text";

const CardInstruction = ({
  card,
  visible,
  onClose,
}: {
  card: string;
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedText>{gameInstructions[card]}</ThemedText>
    </Modal>
  );
};
export default CardInstruction;
