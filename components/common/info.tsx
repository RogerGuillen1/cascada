import { Image, Pressable, ScrollView } from "react-native";
import { ThemedText } from "../themed-text";
import Modal from "./modal";

const Info = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.title}>Com es juga?</ThemedText>

        <ThemedText style={styles.text}>
          Posiciona una ampolla al mig i les cartes de la baralla al voltant
          formant un cercle com a la foto
        </ThemedText>

        <Image
          source={require("../../assets/images/circle.png")}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            marginVertical: 10,
          }}
        />

        <ThemedText style={styles.text}>
          A continuació decidiu qui comença i en quin sentit seguiu
        </ThemedText>

        <ThemedText style={styles.text}>
          Cada jugador, en el seu torn, ha d'agafar una carta i mostrar-la,
          mireu les instruccions de la carta a l'app(el pal no importa, només el
          número) i posar la carta sobre l'ampolla del mig, llavors la següent
          persona segueix amb el joc
        </ThemedText>

        <ThemedText style={styles.text}>
          El joc acaba quan hi ha alguna obertura en el cercle de cartes o el
          piló de sobre l'ampolla cau, en aquest cas l'últim jugador que hagi
          tocat les cartes ha de fer un sant hilari
        </ThemedText>
        <Pressable onPress={onClose} style={styles.button}>
          <ThemedText style={[styles.text, { fontWeight: "bold" }]}>
            Tancar
          </ThemedText>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};

export default Info;

const styles = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    margin: 25,
  },
  text: {
    textAlign: "center",
    fontSize: 17.5,
  },
  button: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
};
