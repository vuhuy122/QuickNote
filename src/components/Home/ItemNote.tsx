import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { generalIcon } from "../../assets/Images";
import { Note } from "../../types/note";
import { scale } from "../../utils/scale";
import BlurViewBase from "../BlurViewBase";
import TextCustom from "../TextCustom";

const ItemNote = (props: Note) => {
  // function getFirst20Words(content: string): string {
  //   const words = props?.content?.split(" ") ?? [];
  //   const isTruncated = words.length > 20;
  //   return `${content.split(/\s+/).slice(0, 20).join(" ")} ${
  //     isTruncated ? "..." : ""
  //   } `;
  // }

  // Helper function to get the first 20 characters of the content
  function getFirst20Chars(content: string): string {
    // Check if content is longer than 20 characters
    const isTruncated = props?.content.length > 20;
    return `${content.slice(0, 20)} ${isTruncated ? "..." : ""} `;
  }

  return (
    <BlurViewBase
      intensity={42}
      tint="systemThinMaterialDark"
      style={styles.blurView}
    >
      <View style={{ flex: 1 }}>
        <TextCustom style={{}}>
          {/* {getFirst20Words(props?.content)} */}
          {getFirst20Chars(props?.content)}
        </TextCustom>
      </View>
      {/* Arrow icon on the right */}
      <Image
        source={generalIcon.icon_arrow}
        style={{
          width: scale(8),
          height: scale(14),
          transform: [{ rotate: `180deg` }],
          tintColor: "#F94695",
        }}
      />
    </BlurViewBase>
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
});
