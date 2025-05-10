import React, { useState } from "react";
import { TextInput, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";
import { scale } from "../utils/scale";
import { COLORS } from "../constants/colors";

interface TextInputCustomProps {
  textInputStyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  textInputDefaultValue?: string;
  placeholder?: string;
}

const TextInputCustom: React.FC<TextInputCustomProps> = ({
  textInputStyle,
  onChangeText,
  textInputDefaultValue = "Please input note content",
  placeholder = "Please input note content",
}) => {
  const [noteContent, setNoteContent] = useState<string>(textInputDefaultValue);

  const handleTextChange = (text: string): void => {
    setNoteContent(text);
    if (onChangeText) {
      onChangeText(text?.trim());
    }
  };

  return (
    <BlurView
      intensity={42}
      tint="dark"
      style={[styles.textInputContainer, textInputStyle]}
    >
      <TextInput
        style={styles.textInput}
        value={noteContent}
        onChangeText={handleTextChange}
        textAlignVertical="top"
        placeholder={placeholder}
        placeholderTextColor={COLORS.white_opacity}
        multiline
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: scale(8),
    padding: scale(16),
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: scale(16),
    minHeight: scale(100),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  textInput: {
    color: "#fff",
    fontSize: scale(14),
    flex: 1,
  },
});

export default TextInputCustom;
