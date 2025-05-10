import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Background from "../components/Background";
import TextCustom from "../components/TextCustom";
import { scale } from "../utils/scale";
import { Image } from "expo-image";
import { homeIcon } from "../assets/Images";
import { COLORS } from "../constants/colors";

export default function Home() {
  return (
    <Background>
      <Header title="Home" isShowRightBtn />
      <View
        style={{
          padding: scale(16),
        }}
      >
        <View style={{ flexDirection: "row", gap: scale(8) }}>
          <Image
            source={homeIcon.clock}
            style={{ width: scale(20), height: scale(20) }}
          />
          <TextCustom
            style={{
              color: COLORS.white_opacity,
            }}
          >
            Recently created notes
          </TextCustom>
        </View>
      </View>
    </Background>
  );
}
