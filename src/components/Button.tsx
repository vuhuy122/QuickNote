import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextCustom from "./TextCustom"; // Adjust the import according to your project
import { scale } from "../utils/scale";

// Define the types for the props
interface ButtonProps {
  onPress?: () => void;

  style?: ViewStyle; // optional custom style
  buttonText?: TextStyle;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,

  style,
  buttonText,
  children,
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
      <LinearGradient
        colors={["#F94695", "#F13A76"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={styles.buttonGradient}
      >
        <TextCustom
          weight="bold"
          style={[
            ...(buttonText ? [buttonText] : []),
            { lineHeight: scale(18) },
          ]}
        >
          {children}
        </TextCustom>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTouchable: {},
  buttonGradient: {
    paddingVertical: scale(8),
    borderRadius: scale(99),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(15),
  },
});

export default Button;
