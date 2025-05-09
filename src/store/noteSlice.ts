// src/store/noteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = "Work and Study" | "Life" | "Health and Well-being";

export interface Note {
  id: string;
  content: string;
  category: Category;
  createdAt: string;
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteAllNotes: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, deleteAllNotes } = noteSlice.actions;
export default noteSlice.reducer;
