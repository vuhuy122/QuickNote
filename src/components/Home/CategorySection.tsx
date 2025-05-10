import React, { memo } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "../../constants/colors";
import { Note } from "../../types/note";
import { scale } from "../../utils/scale";
import TextCustom from "../TextCustom";
import ItemNote from "../ItemNote";
import BlurViewBase from "../BlurViewBase";
import { ROUTER_NAMES } from "../../navigations/Routers";
import { navigate } from "../../navigations/helper";

type Props = {
  icon: number;
  name: string;
  notes: Note[];
};

const CategorySection = ({ icon, name, notes }: Props) => {
  // Get up to three most recent notes, sorted by creation date (descending)
  const categoryNotes = (notes ?? [])
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icon} style={styles.icon} />
        <TextCustom style={styles.title}>{name}</TextCustom>
      </View>
      <FlatList
        data={categoryNotes}
        renderItem={({ item }) => <ItemNote {...item} category={name} />}
        ItemSeparatorComponent={() => <View style={{ height: scale(10) }} />}
        keyExtractor={(note) => note?.id}
        ListEmptyComponent={
          <TouchableOpacity onPress={() => navigate(ROUTER_NAMES.NEW_NOTE)}>
            <BlurViewBase>
              <TextCustom style={styles.emptyText}>
                No notes yet. Press here to add something.
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
  container: {
    marginBottom: scale(25),
  },
  header: {
    flexDirection: "row",
    gap: scale(8),
  },
  icon: {
    width: scale(20),
    height: scale(20),
  },
  title: {
    fontSize: scale(16),
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.white_opacity,
  },
  emptyText: {
    color: COLORS.white_opacity,
    fontSize: scale(14),
    lineHeight: scale(16),
  },
});
