import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
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
import { COLORS } from "../constants/colors";
import BlurViewBase from "./BlurViewBase";

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
  onSelect?: (selectedValue: string) => void;
  defaultValue?: string;
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
  onSelect,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );
  const height = useSharedValue<number>(0);
  const rotate = useSharedValue<number>(0);

  const toggleDropdown = (): void => {
    height.value = isOpen
      ? withTiming(0)
      : withTiming(categories.length * scale(40)); // Điều chỉnh chiều cao dựa trên số item
    rotate.value = isOpen ? withTiming(0) : withTiming(180);
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string): void => {
    setSelectedValue(item);
    if (onSelect) {
      onSelect(item);
    }
    toggleDropdown();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      overflow: "hidden" as const,
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value - 90}deg` }],
    };
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={toggleDropdown}>
        <BlurViewBase
          intensity={42}
          style={[styles.dropdownHeader, dropdownHeaderStyle]}
        >
          <View style={styles.headerContainer}>
            {!!selectedValue ? (
              <TextCustom
                style={[
                  styles.headerText,
                  ...(headerTextStyle ? [headerTextStyle] : []),
                ]}
              >
                {selectedValue}
              </TextCustom>
            ) : (
              <TextCustom
                style={[
                  styles.headerText,
                  {
                    color: COLORS.white_opacity,
                  },
                ]}
              >
                Choose a category
              </TextCustom>
            )}
            <Animated.View style={arrowStyle}>
              <Image
                source={generalIcon.icon_arrow}
                style={{
                  width: scale(8),
                  height: scale(16),
                }}
              />
            </Animated.View>
          </View>
        </BlurViewBase>
      </Pressable>
      <Animated.View
        style={[styles.dropdownContent, animatedStyle, dropdownContentStyle]}
      >
        <BlurViewBase
          intensity={42}
          tint="dark"
          style={[styles.blurView, blurViewStyle]}
        >
          {categories.map((item: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={[styles.item, itemStyle]}
              onPress={() => handleSelect(item)}
            >
              <TextCustom
                style={StyleSheet.flatten([styles.itemText, itemTextStyle])}
              >
                {item}
              </TextCustom>
            </TouchableOpacity>
          ))}
        </BlurViewBase>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(16),
    borderRadius: scale(16),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  dropdownHeader: {
    padding: scale(16),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.white,
    fontSize: scale(14),
    lineHeight: scale(16),
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
    color: COLORS.white,
  },
});

export default DropdownWithBackdropBlur;
