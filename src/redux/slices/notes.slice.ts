import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Note {
  id: string;
  title: string;
  body: string;
  imgUrl: string;
  date: number;
}

interface NoteState {
  notes: Note[];
  active: Note | null;
}

const initialState: NoteState = {
  notes: [],
  active: null,
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    notesAddNew: (state, action: PayloadAction<Note[]>) => {
      return {
        ...state,
        notes: [...action.payload],
      };
    },
    nostesActive: (state, action: PayloadAction<Note>) => {
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    },
    notesLoad: (state, action: PayloadAction<Note[]>) => {
      return {
        ...state,
        notes: [...action.payload],
      };
    },
    notesUpdate: (state, action: PayloadAction<Note>) => {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note,
        ),
      };
    },
    notesFileUrl: (state, action: PayloadAction) => {
      return {
        ...state,
      };
    },
    notesDelete: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    },
    notesLogoutCleaning: (state, action: PayloadAction) => {
      return {
        ...state,
        active: null,
        notes: [],
      };
    },
  },
});

export const {
  notesLogoutCleaning,
  nostesActive,
  notesAddNew,
  notesDelete,
  notesFileUrl,
  notesLoad,
  notesUpdate,
} = noteSlice.actions;
