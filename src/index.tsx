import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigation from "./navigations";
import { persistor } from "./store";

const MainApp = () => {
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
