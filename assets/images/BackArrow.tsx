import Svg, { G, Path } from "react-native-svg";

const BackArrow = ({ size = 24, color = "gray" }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="-19.04 0 75.803 75.803"
      fill="none"
    >
      <G transform="translate(-624.082 -383.588)">
        <Path
          d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default BackArrow;
