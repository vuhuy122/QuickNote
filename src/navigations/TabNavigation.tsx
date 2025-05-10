import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { tabBarIcons } from "../assets/Images";
import Home from "../screens/Home";
import NewNote from "../screens/NewNote";
import Summary from "../screens/Summary";
import { scale } from "../utils/scale";
import { ROUTER_NAMES } from "./Routers";

const Tab = createBottomTabNavigator();

// Configuration for tab icons and labels
const TAB_ICONS = {
  [ROUTER_NAMES.HOME]: {
    icon: tabBarIcons.icon_home,
    iconActive: tabBarIcons.icon_home_active,
    label: "Home",
  },
  [ROUTER_NAMES.CENTER_BUTTON]: {
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
  const isNewNoteTab = route.name === ROUTER_NAMES.CENTER_BUTTON;

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
          style={[styles.tabLabel, { color: focused ? "#F94695" : "#fff" }]}
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
        tabBarBackground: () => (
          <BlurView style={styles.blurView}>
            <View style={styles.tabBarBackground} />
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
        name={ROUTER_NAMES.CENTER_BUTTON}
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
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    overflow: "hidden",
  },
  blurView: {
    flex: 1,
    overflow: "hidden",
  },
  tabBarBackground: {
    flex: 1,
    backgroundColor: "#210C3A",
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
});

export default MyTabs;
