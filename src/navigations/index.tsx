import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import MainStackNavigation from "./StackNavigation";
import { navigationRef } from "./helper";
import { COLORS } from "../constants/colors";

export default function MainNavigation() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.russian_violet,
  },
});
