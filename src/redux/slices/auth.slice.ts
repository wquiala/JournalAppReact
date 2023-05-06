import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface LoginState {
  uid: string | null;
  name: string | null;
}

// Define the initial state using that type
const initialState: LoginState = {
  uid: null,
  name: null,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    },
    logout: (state, action: PayloadAction) => {
      return {
        ...state,
        uid: null,
        name: null,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUid = (state: LoginState) => state.uid;
export const selectName = (state: LoginState) => state.name;
