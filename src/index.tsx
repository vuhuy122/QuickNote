import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigation from "./navigations";
import { persistor, store } from "./store";
import { useFonts } from "expo-font";
import FlashMessage, { DefaultFlash } from "react-native-flash-message";
import Popup from "./components/Popup";

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainNavigation />
            <FlashMessage MessageComponent={MessageComponent} />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default MainApp;
const MessageComponent = (event: any) => {
  let messageData = event?.message;
  if (messageData?.type === "custom") return <Popup props={messageData} />;
  return <DefaultFlash {...event} />;
};
