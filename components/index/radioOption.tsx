import { Image, Pressable, View } from "react-native";
import { ThemedText } from "../themed-text";

const RadioOption = ({ label, selected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Image
        source={
          label === "Baralla de Poker"
            ? require("../../assets/images/PNG-cards-1.3/ace_of_clubs.png")
            : require("../../assets/images/cartes_baralla_espanyola/oros_01.png")
        }
        style={{ width: 40, height: 60, resizeMode: "contain" }}
      />
      <ThemedText style={{ fontSize: 16 }}>{label}</ThemedText>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "gray",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner filled circle */}
        {selected && (
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "blue",
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default RadioOption;
