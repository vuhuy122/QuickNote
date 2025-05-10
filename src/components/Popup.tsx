import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { scale } from "../utils/scale";
import TextCustom from "./TextCustom";
import { COLORS } from "../constants/colors";

export interface IToastProps {
  description?: string;
}

export default function ToastCustom({ props }: { props: IToastProps }) {
  useSafeAreaInsets(); // insets not used, but kept for future-proofing

  const { description = "" } = props;

  return (
    <LinearGradient
      colors={[COLORS.steel_pink, COLORS.interdimensional_lue]}
      style={styles.gradient}
    >
      <TextCustom weight="bold" style={styles.text}>
        {description}
      </TextCustom>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    padding: scale(16),
    borderRadius: scale(14),
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: scale(16),
    textAlign: "center",
  },
});
