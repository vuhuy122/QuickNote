import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import TextCustom from "../TextCustom";
import Button from "../Button";
import BlurViewBase from "../BlurViewBase";
import { scale } from "../../utils/scale";
import { COLORS } from "../../constants/colors";
import { navigate } from "../../navigations/helper";
import { ROUTER_NAMES } from "../../navigations/Routers";

interface Props {
  icon: any;
  name: string;
  count: number;
}

export default function SummaryCategoryItem({ icon, name, count }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.header}>
          <Image source={icon} style={styles.icon} />
          <TextCustom style={styles.name}>{name}</TextCustom>
        </View>
        <Button
          onPress={() =>
            navigate(ROUTER_NAMES.CATEGORY_DETAIL, {
              name,
            })
          }
          style={{ alignSelf: "center" }}
        >
          Detail
        </Button>
      </View>
      <BlurViewBase tint="dark" intensity={1} style={styles.blur}>
        <TextCustom style={styles.text}>
          This topic has a total of {count} records.
        </TextCustom>
      </BlurViewBase>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(30),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    marginBottom: scale(12),
  },
  icon: {
    width: scale(48),
    height: scale(48),
    borderRadius: 100,
  },
  name: {
    fontSize: scale(16),
  },
  blur: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  text: {
    fontSize: scale(16),
    color: COLORS.white_opacity,
  },
});
