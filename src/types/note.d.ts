export interface Note {
  id: string;
  content: string;
  createdAt: string;
}

export type Category = "Work and Study" | "Life" | "Health and Well-being";

export interface NotesByCategory {
  [key: Category]: Note[];
}
