import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { scale } from "../utils/scale";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { generalIcon } from "../assets/Images";
import { useNavigation } from "@react-navigation/native";
import { ROUTER_NAMES } from "../navigations/Routers";
import { navigate } from "../navigations/helper";
import TextCustom from "./TextCustom";

type Props = {
  title: string;
  isShowBackBtn?: boolean;
  isShowRightBtn?: boolean;
};

const Header = (props: Props) => {
  const { title, isShowBackBtn, isShowRightBtn } = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}
    >
      <LinearGradient
        colors={["#280947", "#280841"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.02 }}
        style={[styles.container, { paddingTop: insets.top }]}
      >
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            {isShowBackBtn && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
              >
                <Image
                  source={generalIcon.icon_arrow}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            )}
            <TextCustom weight="bold" style={styles.text}>
              {title}
            </TextCustom>
          </View>
          {isShowRightBtn && (
            <TouchableOpacity
              onPress={() => navigate(ROUTER_NAMES.SETTINGS)}
              style={styles.iconButton}
            >
              <Image
                source={generalIcon.icon_setting}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
  headerContainer: {
    height: scale(68),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(24),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  iconButton: {
    width: scale(24),
    height: scale(24),
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: scale(8),
    height: scale(14),
  },
  rightIcon: {
    width: scale(24),
    height: scale(24),
  },
  text: {
    color: "white",
    fontSize: scale(24),
    top: Platform.OS === "android" ? scale(-2) : 0,
  },
});
