import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Image } from "expo-image";
import Background from "../components/Background";
import Header from "../components/Header";
import BlurViewBase from "../components/BlurViewBase";
import TextCustom from "../components/TextCustom";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { generalIcon, settings_icon } from "../assets/Images";
import { scale } from "../utils/scale";
import { AppDispatch } from "../store";
import { deleteAllNotes } from "../store/slices/noteSlice";
import { showMessage } from "react-native-flash-message";

export default function Settings() {
  const dispatch = useDispatch<AppDispatch>();

  // Handle deleting all notes with confirmation alert
  const handleDeleteAllNote = () => {
    Alert.alert("Alert", "Are you sure you want to delete all notes?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch(deleteAllNotes());
          showMessage({
            description: "All notes have been cleared",
            message: "Yeah",
            type: "custom" as any,
            floating: true,
            position: "center",
            duration: 2500,
          });
        },
      },
    ]);
  };

  // List of feature settings to display
  const featureSettings = [
    { name: "Online Customer", icon: settings_icon.icon_call_center },
    { name: "User Agreement", icon: settings_icon.icon_agreement },
    { name: "Privacy Policy", icon: settings_icon.icon_policy },
    { name: "About Us", icon: settings_icon.icon_about },
  ];

  return (
    <Background>
      {/* Header with back button */}
      <Header title="Settings" isShowBackBtn />

      {/* Settings options */}
      <View style={{ gap: scale(16), marginTop: scale(30), padding: scale(8) }}>
        {featureSettings.map((item) => (
          <BlurViewBase style={styles.blurView} key={item.icon}>
            <View style={styles.row}>
              <Image source={item.icon} style={styles.icon} />
              <TextCustom style={styles.optionText}>{item.name}</TextCustom>
            </View>
            <Image source={generalIcon.icon_arrow} style={styles.arrowIcon} />
          </BlurViewBase>
        ))}
      </View>

      {/* Footer with delete all notes button */}
      <Footer>
        <Button style={styles.deleteBtn} onPress={handleDeleteAllNote}>
          Delete All Notes
        </Button>
      </Footer>
    </Background>
  );
}

const styles = StyleSheet.create({
  blurView: {
    borderWidth: 0.8,
    borderColor: "rgba(255, 255, 255, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
  optionText: {
    fontSize: scale(16),
  },
  arrowIcon: {
    width: scale(8),
    height: scale(14),
    transform: [{ rotate: "180deg" }],
    tintColor: "#F94695",
  },
  deleteBtn: {
    borderRadius: 99,
    overflow: "hidden",
    flex: 0.4,
  },
});
