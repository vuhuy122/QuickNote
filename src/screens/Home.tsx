import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Background from "../components/Background";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Background>
        <Header title="Home" isShowRightBtn />
      </Background>
    </View>
  );
}
