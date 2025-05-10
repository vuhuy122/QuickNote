import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Image } from "expo-image";
import Background from "../components/Background";
import Header from "../components/Header";
import CategorySection from "../components/Home/CategorySection";
import TextCustom from "../components/TextCustom";
import { homeIcon } from "../assets/Images";
import { CATEGORY_META } from "../constants/categories";
import { COLORS } from "../constants/colors";
import { RootState } from "../store";
import { scale } from "../utils/scale";
import { Note } from "../types/note";

// Header component for the recent notes section
const ListHeaderComponent = () => (
  <View style={styles.recentHeader}>
    <Image source={homeIcon.clock} style={styles.categoryIcon} />
    <TextCustom style={styles.recentTitle}>Recently created notes</TextCustom>
  </View>
);

export default function Home() {
  // notes from Redux store
  const notes = useSelector((state: RootState) => state.notes.notes);

  const renderCategory = ({
    item,
  }: {
    item: { icon: number; name: string };
  }) => {
    // Get notes for the current category
    const categoryNotes = (notes[item.name as keyof typeof notes] ??
      []) as Note[];
    return <CategorySection {...item} notes={categoryNotes} />;
  };

  return (
    <Background>
      {/* App header */}
      <Header title="Home" isShowRightBtn />
      <View style={styles.content}>
        {/* List of categories with header */}
        <FlatList
          bounces={false}
          ListHeaderComponent={ListHeaderComponent}
          data={CATEGORY_META}
          renderItem={renderCategory}
          style={styles.categoryList}
          keyExtractor={(item) => item.name}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: scale(16),
    flex: 1,
  },
  recentHeader: {
    flexDirection: "row",
    gap: scale(8),
    marginBottom: scale(25),
  },
  recentTitle: {
    color: COLORS.white_opacity,
    fontSize: scale(16),
  },
  categoryList: {
    marginTop: scale(10),
    flex: 1,
  },
  categoryIcon: {
    width: scale(20),
    height: scale(20),
  },
});
