import { ThemedText } from "../themed-text";
import Modal from "./modal";

const Language = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <ThemedText>LLanguatja</ThemedText>
    </Modal>
  );
};
export default Language;
