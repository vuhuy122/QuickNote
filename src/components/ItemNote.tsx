import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { generalIcon } from "../assets/Images";
import { Note } from "../types/note";
import { scale } from "../utils/scale";
import BlurViewBase from "./BlurViewBase";
import TextCustom from "./TextCustom";
import { COLORS } from "../constants/colors";
import { navigate } from "../navigations/helper";
import { ROUTER_NAMES } from "../navigations/Routers";
interface IProps extends Note {
  category: string;
}
const ItemNote = (props: IProps) => {
  // function getFirst20Words(content: string): string {
  //   const words = props?.content?.split(" ") ?? [];
  //   const isTruncated = words.length > 20;
  //   return `${content.split(/\s+/).slice(0, 20).join(" ")} ${
  //     isTruncated ? "..." : ""
  //   } `;
  // }

  // Helper to get the first 20 characters of the content as required by the assignment
  function getFirst20Chars(content: string): string {
    const isTruncated = props?.content.length > 20;
    return `${content.slice(0, 20)}${isTruncated ? "..." : ""}`;
  }

  return (
    <Pressable
      onPress={() =>
        navigate(ROUTER_NAMES.NEW_NOTE, {
          content: props.content,
          category: props.category,
        })
      }
    >
      <BlurViewBase intensity={42} tint="dark" style={styles.blurView}>
        <View style={styles.contentContainer}>
          <TextCustom style={styles.text}>
            {/* {getFirst20Words(props?.content)} */}
            {getFirst20Chars(props?.content)}
          </TextCustom>
        </View>
        <Image source={generalIcon.icon_arrow} style={styles.arrowIcon} />
      </BlurViewBase>
    </Pressable>
  );
};

export default ItemNote;

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: scale(14),
    lineHeight: scale(20),
  },
  arrowIcon: {
    width: scale(8),
    height: scale(14),
    transform: [{ rotate: "180deg" }],
    tintColor: "#F94695",
  },
});
