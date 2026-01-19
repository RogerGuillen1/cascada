import { Image, Pressable, View } from "react-native";
import { ThemedText } from "../themed-text";

const RadioOption = ({ label, value, selected, onPress }) => {
  const getImageSource = () => {
    switch (value) {
      case "poker":
        return require("../../assets/images/PNG-cards-1.3/ace_of_clubs.png");
      case "spanish":
        return require("../../assets/images/cartes_baralla_espanyola/oros_01.png");
      default:
        return null;
    }
  };

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
        source={getImageSource()}
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
