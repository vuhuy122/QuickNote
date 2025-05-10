import React from "react";
import { Platform, Text, TextProps, TextStyle } from "react-native";
import { COLORS } from "../constants/colors";
import { scale } from "../utils/scale";

interface TextCustomProps extends TextProps {
  children: React.ReactNode;
  weight?: "regular" | "bold";
  size?: number;
  color?: string;
  style?: TextStyle | TextStyle[] | undefined;
}

const fontMap = {
  regular: "pingfang-sc-regular",
  bold: "pingfang-sc-bold",
};

export default function TextCustom({
  children,
  weight = "regular",
  size = 16,
  color = COLORS.white,
  style,
  ...rest
}: TextCustomProps) {
  return (
    <Text
      style={[
        {
          fontFamily: fontMap[weight],
          fontSize: size,
          color,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
