import { Image } from "expo-image";
import React, { memo } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { Note } from "../../types/note";
import { scale } from "../../utils/scale";
import TextCustom from "../TextCustom";
import ItemNote from "./ItemNote";
import BlurViewBase from "../BlurViewBase";
import { ROUTER_NAMES } from "../../navigations/Routers";
import { navigate } from "../../navigations/helper";

type Props = {
  icon: number;
  name: string;
  notes: Note[];
};

const CategorySection = ({ icon, name, notes }: Props) => {
  const categoryNotes = notes
    ? [...notes]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 3)
    : [];

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <Image source={icon} style={styles.categoryIcon} />
        <TextCustom style={styles.categoryTitle}>{name}</TextCustom>
      </View>
      <FlatList
        data={categoryNotes}
        renderItem={({ item }) => <ItemNote {...item} />}
        ItemSeparatorComponent={() => <View style={{ height: scale(10) }} />}
        keyExtractor={(note) => note.id}
        ListEmptyComponent={
          <TouchableOpacity onPress={() => navigate(ROUTER_NAMES.NEW_NOTE)}>
            <BlurViewBase>
              <TextCustom style={{ color: COLORS.white_opacity }}>
                No notes yet. Press here to adding something.
              </TextCustom>
            </BlurViewBase>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default memo(CategorySection);

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: scale(25),
  },
  categoryHeader: {
    flexDirection: "row",
    gap: scale(8),
  },
  categoryIcon: {
    width: scale(20),
    height: scale(20),
  },
  categoryTitle: {
    fontSize: scale(16),
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.white_opacity,
  },
});
