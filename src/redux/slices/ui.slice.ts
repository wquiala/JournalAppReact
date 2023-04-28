import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface uiState {
  loading: boolean;
  errorMsg: string | null;
}

const initialState: uiState = {
  loading: false,
  errorMsg: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    uiSetError: (state, action: PayloadAction<uiState>) => {
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };
    },
    uiRemoveError: (state, action: PayloadAction) => {
      return { ...state, errorMsg: null };
    },
    startLoading: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    finishLoading: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { uiSetError, uiRemoveError, startLoading, finishLoading } =
  uiSlice.actions;
