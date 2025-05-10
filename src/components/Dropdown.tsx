import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

import { scale } from "../utils/scale";
import TextCustom from "./TextCustom";
import { Image } from "expo-image";
import { generalIcon } from "../assets/Images";

// Định nghĩa interface cho props
interface DropdownProps {
  containerStyle?: StyleProp<ViewStyle>;
  dropdownHeaderStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: TextStyle | undefined;
  dropdownContentStyle?: StyleProp<ViewStyle>;
  blurViewStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  categories?: string[];
}

const DropdownWithBackdropBlur: React.FC<DropdownProps> = ({
  containerStyle,
  dropdownHeaderStyle,
  headerTextStyle,
  dropdownContentStyle,
  blurViewStyle,
  itemStyle,
  itemTextStyle,
  categories = [],
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const height = useSharedValue<number>(0);
  const rotate = useSharedValue<number>(0);

  const toggleDropdown = (): void => {
    height.value = isOpen ? withTiming(0) : withTiming(120);
    rotate.value = isOpen ? withTiming(0) : withTiming(180);
    setIsOpen(!isOpen);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      overflow: "hidden" as const,
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    };
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <BlurView
        intensity={42}
        tint="dark"
        style={[styles.dropdownHeader, dropdownHeaderStyle]}
      >
        <TouchableOpacity
          onPress={toggleDropdown}
          style={styles.headerContainer}
        >
          <TextCustom
            style={[
              styles.headerText,
              ...(headerTextStyle ? [headerTextStyle] : []),
            ]}
          >
            Choose a category
          </TextCustom>
          <Animated.View style={arrowStyle}>
            <Image
              source={generalIcon.icon_arrow}
              style={{
                width: scale(8),
                height: scale(16),
                transform: [{ rotate: "-90deg" }],
              }}
            />
          </Animated.View>
        </TouchableOpacity>
      </BlurView>
      <Animated.View
        style={[styles.dropdownContent, animatedStyle, dropdownContentStyle]}
      >
        <BlurView
          intensity={42}
          tint="dark"
          style={[styles.blurView, blurViewStyle]}
        >
          {categories.map((item: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={[styles.item, itemStyle]}
              onPress={() => console.log(`Selected: ${item}`)}
            >
              <Text style={[styles.itemText, itemTextStyle]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </BlurView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(16),
  },
  dropdownHeader: {
    padding: scale(16),
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: scale(16),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: scale(14),
  },
  dropdownContent: {
    borderRadius: 5,
  },
  blurView: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  item: {
    padding: scale(8),
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
  },
  itemText: {
    color: "#fff",
  },
});

export default DropdownWithBackdropBlur;
