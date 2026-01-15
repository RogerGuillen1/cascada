import { ReactNode } from "react";
import { Pressable, Modal as RNModal, StyleSheet, View } from "react-native";
import { ThemedView } from "../themed-view";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ visible, onClose, children }: Props) => {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* Content */}
      <View style={styles.centered}>
        <ThemedView style={styles.modal}>{children}</ThemedView>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    maxHeight: "80%",
    width: "80%",
    padding: 20,
    borderRadius: 16,
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
