import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    addNote: (
      state,
      action: PayloadAction<{ content: string; category: string }>
    ) => {
      const { content, category } = action.payload;
      if (content.length <= 200) {
        const newNote: Note = {
          id: Date.now().toString(),
          content,
          category,
          createdAt: new Date().toISOString(),
        };
        state.notes.push(newNote);
      }
    },
    deleteAllNotes: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, deleteAllNotes } = noteSlice.actions;
export default noteSlice.reducer;
