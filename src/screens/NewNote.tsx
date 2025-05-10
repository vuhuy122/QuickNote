import { View, Text } from "react-native";
import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";

export default function NewNote() {
  return (
    <Background>
      <Header title="New note" isShowBackBtn />
    </Background>
  );
}
