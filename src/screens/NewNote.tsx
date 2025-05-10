import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import Background from "../components/Background";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import TextInputCustom from "../components/TextInputCustom";
import { CATEGORIES, CATEGORY_LIST } from "../constants/categories";
import { AppDispatch } from "../store";
import { addNote } from "../store/slices/noteSlice";
import { Category } from "../types/note";
import { scale, width } from "../utils/scale";
import Footer from "../components/Footer";

export default function NewNote(props?: any) {
  const params = props?.route?.params;

  const dispatch = useDispatch<AppDispatch>();
  const [content, setContent] = useState<string>(props?.content || "");
  const [category, setCategory] = useState<Category>(CATEGORIES.WORK_STUDY);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Handle category selection from dropdown
  const handleSelect = (selectedValue: string) => {
    setCategory(selectedValue as Category);
  };

  // Handle text input change
  const handleTextChange = (text: string) => setContent(text);

  // Handle add note button press
  const handleAddNote = () => {
    setLoading(true);

    // Validate input
    if (content.length === 0 || category.length === 0) {
      showMessage({
        description: "Note or category content cannot be empty",
        message: "Oops",
        type: "custom" as any,
        floating: true,
        position: "center",
        duration: 3000,
      });
      setLoading(false);
      return;
    }

    if (content.length > 200) {
      showMessage({
        description: "Note cannot exceed 200 characters",
        message: "Oops",
        type: "custom" as any,
        floating: true,
        position: "center",
        duration: 2500,
      });
      setLoading(false);
      return;
    }

    // Dispatch add note action
    dispatch(addNote({ content, category }));

    showMessage({
      description: "Add note success",
      message: "Yeah",
      type: "custom" as any,
      floating: true,
      position: "center",
      duration: 2500,
    });

    setContent("");

    // Navigate back after a delay
    setTimeout(() => {
      navigation.goBack();
    }, 2500);
  };

  return (
    <Background>
      <Header title={!params ? "New note" : "Note detail"} isShowBackBtn />
      <View style={styles.content}>
        {/* Category dropdown */}
        <Dropdown
          categories={CATEGORY_LIST}
          onSelect={handleSelect}
          defaultValue={params?.category || ""}
        />
        {/* Note input */}
        <TextInputCustom
          textInputStyle={styles.textInput}
          onChangeText={handleTextChange}
          textInputDefaultValue={params?.content || ""}
        />
      </View>
      <Footer>
        <Button
          onPress={handleAddNote}
          disabled={loading}
          style={styles.saveButtonTouchable}
        >
          Save
        </Button>
      </Footer>
    </Background>
  );
}

// Styles
const styles = StyleSheet.create({
  content: {
    padding: scale(16),
  },
  textInput: {
    minHeight: scale(150),
    marginTop: scale(16),
  },

  saveButtonTouchable: {
    borderRadius: 99,
    overflow: "hidden",
    flex: 0.4,
    fontSize: scale(14),
  },
});
