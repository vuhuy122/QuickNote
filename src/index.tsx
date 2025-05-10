import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigation from "./navigations";
import { persistor } from "./store";
import { useFonts } from "expo-font";

const MainApp = () => {
  const [fontsLoaded] = useFonts({
    "pingfang-sc-regular": require("../src/assets/fonts/pingfang-sc-regular.ttf"),
    "pingfang-sc-bold": require("../src/assets/fonts/pingfang-sc-bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default MainApp;
