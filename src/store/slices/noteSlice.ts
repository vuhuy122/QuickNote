import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
import { CATEGORY_LIST } from "../../constants/categories";

// Ensure Category is a string literal union of all category names
export type Category = (typeof CATEGORY_LIST)[number];

// NotesByCategory maps each Category to an array of Note
export type NotesByCategory = Record<Category, Note[]>;

interface NoteState {
  notes: NotesByCategory;
}

const initialState: NoteState = {
  notes: CATEGORY_LIST.reduce((acc, category) => {
    acc[category] = [];
    return acc;
  }, {} as NotesByCategory),
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{ content: string; category: Category }>
    ) => {
      const { content, category } = action.payload;
      if (content.length <= 200) {
        const newNote: Note = {
          id: Date.now().toString(),
          content,
          createdAt: new Date().toISOString(),
        };
        state.notes[category] = [...state.notes[category], newNote]; // Immer handles this safely
      }
    },
    deleteAllNotes: (state) => {
      CATEGORY_LIST.forEach((category) => {
        state.notes[category] = [];
      });
    },
  },
});

export const { addNote, deleteAllNotes } = noteSlice.actions;
export default noteSlice.reducer;
