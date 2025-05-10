import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import { generalIcon, settings_icon } from "../assets/Images";
import BlurViewBase from "../components/BlurViewBase";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../utils/scale";
import { Image } from "expo-image";
import TextCustom from "../components/TextCustom";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { deleteAllNotes } from "../store/slices/noteSlice";
import { showMessage } from "react-native-flash-message";
import ItemNote from "../components/ItemNote";
import { ROUTER_NAMES } from "../navigations/Routers";
import { navigate } from "../navigations/helper";
import { COLORS } from "../constants/colors";
import { Note } from "../types/note";

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
  const categoryNotes = (notes[params?.name as keyof typeof notes] ??
    []) as Note[];

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
