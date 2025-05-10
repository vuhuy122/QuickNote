import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { scale } from "../utils/scale";
import { COLORS } from "../constants/colors";

type BackgroundProps = {
  children: React.ReactNode;
  colors?: [string, string, ...string[]];
  style?: StyleProp<ViewStyle>;
};

const Background: React.FC<BackgroundProps> = ({
  children,
  colors = [
    COLORS.space_cadet,
    COLORS.russian_violet,
    COLORS.american_purple,
    COLORS.russian_violet,
  ],
  style,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, style, { paddingBottom: insets.bottom * 2 }]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Background;
