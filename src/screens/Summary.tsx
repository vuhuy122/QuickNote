import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Background from "../components/Background";
import BlurViewBase from "../components/BlurViewBase";
import TextCustom from "../components/TextCustom";
import { generalIcon } from "../assets/Images";
import { CATEGORY_META } from "../constants/categories";
import { scale } from "../utils/scale";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Button from "../components/Button";
import SummaryCategoryItem from "../components/Summary/SummaryCategoryItem";

export default function Summary() {
  const insets = useSafeAreaInsets();
  const counts = useSelector((state: RootState) => state.notes.notes);

  return (
    <Background style={[styles.background, { paddingTop: insets.top }]}>
      <Image
        source={generalIcon.icon_robot}
        contentFit="contain"
        style={[styles.image, { top: -insets.top / 2 - scale(10) }]}
      />
      <View style={styles.header}>
        <TextCustom weight="bold" style={styles.title}>
          Summary
        </TextCustom>
      </View>
      <BlurViewBase intensity={42} style={styles.blurView}>
        <ScrollView style={{ flex: 1 }} bounces={false}>
          {CATEGORY_META.map((item) => (
            <SummaryCategoryItem
              key={item.icon}
              count={counts[item.name as keyof typeof counts].length || 0}
              icon={item.icon_summary}
              name={item.name}
            />
          ))}
        </ScrollView>
      </BlurViewBase>
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flex: 0.23,
  },
  title: {
    fontSize: scale(24),
    color: "#fff",
    marginLeft: scale(24),
    marginTop: scale(17),
  },
  image: {
    width: scale(268),
    height: scale(269),
    position: "absolute",
    right: 0,
  },
  blurView: {
    flex: 1,
    borderRadius: scale(16),
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: scale(16),
    overflow: "hidden",
    paddingTop: scale(30),
  },
  categoryContainer: {
    marginBottom: scale(20),
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    marginBottom: scale(12),
  },
  categoryIcon: {
    width: scale(48),
    height: scale(48),
    borderRadius: 100,
  },
  categoryName: {
    fontSize: scale(16),
  },
  categoryBlur: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  recordText: {
    fontSize: scale(16),
  },
});
