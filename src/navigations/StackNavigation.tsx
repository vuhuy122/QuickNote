import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";
import { ROUTER_NAMES } from "./Routers";
import MyTabs from "./TabNavigation";
import NewNote from "../screens/NewNote";
import Settings from "../screens/Settings";
import CategoryDetail from "../screens/CategoryDetail";

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  const configModalAndroid: NativeStackNavigationOptions =
    Platform.OS === "android"
      ? {
          presentation: "card",
          statusBarHidden: true,
          animation: "slide_from_right",
          gestureEnabled: true,
        }
      : { presentation: "card" };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main app tab navigation without animation */}
      <Stack.Screen
        name={ROUTER_NAMES.MY_TAB}
        component={MyTabs}
        options={{
          animation: "none", // Tắt animation cho màn hình chính
        }}
      />
      <Stack.Screen
        name={ROUTER_NAMES.NEW_NOTE}
        component={NewNote}
        options={{
          ...configModalAndroid,
        }}
      />
      <Stack.Screen
        name={ROUTER_NAMES.SETTINGS}
        component={Settings}
        options={{
          ...configModalAndroid,
        }}
      />
      <Stack.Screen
        name={ROUTER_NAMES.CATEGORY_DETAIL}
        component={CategoryDetail}
        options={{
          ...configModalAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
