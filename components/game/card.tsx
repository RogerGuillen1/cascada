import { Image, View } from "react-native";

type Props = {
  imageSrc: any;
};

const Card = ({ imageSrc }: Props) => {
  return (
    <View>
      <Image
        source={imageSrc}
        style={{ width: 70, height: 120 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Card;
