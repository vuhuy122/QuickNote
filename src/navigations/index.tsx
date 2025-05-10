import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import MainStackNavigation from "./StackNavigation";
import { navigationRef } from "./helper";

export default function MainNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#351159",
  },
});
