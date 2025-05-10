import { Image } from "expo-image";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { generalIcon } from "../assets/Images";
import Background from "../components/Background";
import { scale } from "../utils/scale";
import { StyleSheet } from "react-native";
import TextCustom from "../components/TextCustom";

export default function Summary() {
  const insets = useSafeAreaInsets();

  return (
    <Background style={[styles.background, { paddingTop: insets.top }]}>
      <TextCustom weight="bold" style={styles.title}>
        Summary
      </TextCustom>
      <Image
        source={generalIcon.icon_robot}
        contentFit="contain"
        style={[styles.image, { top: -insets.top / 2 }]}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  title: {
    fontSize: scale(24),
    color: "#ffffff",
    marginLeft: scale(24),
    marginTop: scale(17),
  },
  image: {
    width: scale(268),
    height: scale(269),
    position: "absolute",
    right: 0,
  },
});
