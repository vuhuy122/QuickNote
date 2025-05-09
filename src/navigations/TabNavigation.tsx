import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import Summary from "../screens/Summary";
import Home from "../screens/Home";
import NewNote from "../screens/NewNote";
import { height, scale } from "../utils/scale";
import { ROUTER_NAMES } from "./Routers";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { tabBarIcons } from "../assets/Images";
import { navigate } from "./helper";

const Tab = createBottomTabNavigator();

// Configuration for tab icons and labels
const TAB_ICONS = {
  [ROUTER_NAMES.HOME]: {
    icon: tabBarIcons.icon_home,
    iconActive: tabBarIcons.icon_home_active,
    label: "Home",
  },
  [ROUTER_NAMES.NEW_NOTE]: {
    icon: tabBarIcons.icon_plus,
    iconActive: tabBarIcons.icon_plus,
    label: "New Note",
  },
  [ROUTER_NAMES.SUMMARY]: {
    icon: tabBarIcons.icon_summary,
    iconActive: tabBarIcons.icon_summary_active,
    label: "Summary",
  },
};

// Function to create screen options for each tab
const createScreenOptions = ({ route }: { route: RouteProp<any, string> }) => {
  const tabConfig = TAB_ICONS[route.name];
  const isNewNoteTab = route.name === ROUTER_NAMES.NEW_NOTE;

  return {
    headerShown: false,
    // Custom tab bar icon
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <View style={styles.iconContainer}>
        <Image
          source={focused ? tabConfig.iconActive : tabConfig.icon}
          style={[
            styles.icon,
            {
              width: isNewNoteTab ? scale(36) : scale(50.29),
              height: isNewNoteTab ? scale(36) : scale(47),
            },
          ]}
        />
      </View>
    ),
    // Custom tab bar label
    tabBarLabel: ({ focused }: { focused: boolean }) =>
      !isNewNoteTab && (
        <Text
          style={[styles.tabLabel, { color: focused ? "#FF5CA8" : "#fff" }]}
        >
          {tabConfig.label}
        </Text>
      ),
  };
};

// Main Tab Navigator component
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        // Custom background for the tab bar
        tabBarBackground: () => (
          <BlurView style={styles.blurView}>
            <LinearGradient
              colors={["#19022E", "#3A0A5A"]}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </BlurView>
        ),
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name={ROUTER_NAMES.HOME}
        component={Home}
        options={createScreenOptions}
      />
      {/* New Note Tab with custom tab press behavior */}
      <Tab.Screen
        name={ROUTER_NAMES.NEW_NOTE}
        component={NewNote} // or dummy component
        options={createScreenOptions}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // prevent navigation
            navigation.navigate(ROUTER_NAMES.NEW_NOTE);
          },
        })}
      />
      {/* Summary Tab */}
      <Tab.Screen
        name={ROUTER_NAMES.SUMMARY}
        component={Summary}
        options={createScreenOptions}
      />
    </Tab.Navigator>
  );
}

// Styles for the Tab Navigator and its components
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    resizeMode: "contain",
  },
  tabLabel: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
    top: scale(15),
  },
  tabBarStyle: {
    height: scale(100),
    borderTopWidth: 0,
    paddingBottom: 5,
    paddingTop: scale(25),
    position: "absolute",
    backgroundColor: "transparent",
  },
  blurView: {
    flex: 1,
    overflow: "hidden",
  },
  linearGradient: {
    flex: 1,
  },
});

export default MyTabs;
