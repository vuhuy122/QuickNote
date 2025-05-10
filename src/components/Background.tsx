import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type BackgroundProps = {
  children: React.ReactNode;
  colors?: [string, string, ...string[]];
  style?: StyleProp<ViewStyle>;
};

const Background: React.FC<BackgroundProps> = ({
  children,
  colors = ["#1B284F", "#351159", "#421C45", "#3B184E"],
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, style]}
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
