import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Background from "../components/Background";
import BlurViewBase from "../components/BlurViewBase";
import Header from "../components/Header";
import ItemNote from "../components/ItemNote";
import TextCustom from "../components/TextCustom";
import { COLORS } from "../constants/colors";
import { ROUTER_NAMES } from "../navigations/Routers";
import { navigate } from "../navigations/helper";
import { RootState } from "../store";
import { Note } from "../types/note";
import { scale } from "../utils/scale";

/**
 * CategoryDetail Screen
 * Displays notes for a specific category.
 */

export default function CategoryDetail({ route }: any) {
  // Get category name from route params
  const params = route?.params;

  // Get notes from Redux store
  const notes = useSelector((state: RootState) => state.notes.notes);

  // Filter notes by category
  const categoryNotes = [
    ...(notes[params?.name as keyof typeof notes] || []),
  ]?.sort?.(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ) as Note[];

  return (
    <Background>
      {/* Header with category name */}
      <Header title={params?.name || "Category Detail"} isShowBackBtn />

      {/* List of notes in the category */}
      <FlatList
        style={{ marginTop: scale(30), paddingHorizontal: scale(16) }}
        data={categoryNotes}
        renderItem={({ item }) => (
          <ItemNote {...item} category={params?.name} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: scale(10) }} />}
        keyExtractor={(note) => note.id}
        // Show message if no notes exist
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
    </Background>
  );
}

// Styles for the screen
const styles = StyleSheet.create({
  emptyText: {
    color: COLORS.white_opacity,
    fontSize: scale(14),
    lineHeight: scale(16),
  },
});
