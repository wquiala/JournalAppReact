import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth.slice';
import { uiSlice } from './slices/ui.slice';
// ...
export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    uiReducer: uiSlice.reducer,
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
