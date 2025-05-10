import { View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import { BlurView, BlurViewProps } from "expo-blur";
import { scale } from "../utils/scale";

type Props = {
  //   style?: StyleProp<ViewStyle>;
};

const BlurViewBase: React.FC<BlurViewProps> = ({
  children,
  intensity = 42,
  style,
  tint = "dark",
}) => {
  return (
    <BlurView
      intensity={intensity}
      tint={tint}
      style={[styles.container, style]}
    >
      {children}
    </BlurView>
  );
};

export default BlurViewBase;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(16),
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: scale(16),
    overflow: "hidden",
  },
});
