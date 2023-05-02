import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth.slice';
import { uiSlice } from './slices/ui.slice';
import { noteSlice } from './slices/notes.slice';
// ...
export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    uiReducer: uiSlice.reducer,
    noteReducer: noteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          otherValue: 42,
        },
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
