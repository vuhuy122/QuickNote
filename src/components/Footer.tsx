import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { scale, width } from "../utils/scale";

// Define the types for the props
interface FooterProps {
  onPress?: () => void;

  style?: ViewStyle; // optional custom style
  FooterText?: TextStyle;
  children: React.ReactNode;
  disabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <View style={styles.footerContainer}>
      <LinearGradient
        colors={["rgba(28,11,55,0.85)", "rgba(29,8,55,0.85)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={styles.footerGradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: width,
    height: 100,
    bottom: 0,
    position: "absolute",
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    overflow: "hidden",
  },
  footerGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  saveButtonGradient: {
    paddingVertical: scale(12),
    borderRadius: scale(16),
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: scale(14),
  },
  saveButtonTouchable: {
    borderRadius: 99,
    overflow: "hidden",
    flex: 0.4,
  },
});

export default Footer;
