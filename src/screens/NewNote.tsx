import { View, Text } from "react-native";
import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { scale } from "../utils/scale";
import { CATEGORY_LIST } from "../constants/categories";

export default function NewNote() {
  return (
    <Background>
      <Header title="New note" isShowBackBtn />
      <View style={{ padding: scale(16) }}>
        <Dropdown categories={CATEGORY_LIST} />
      </View>
    </Background>
  );
}
