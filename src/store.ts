import { configureStore } from "@reduxjs/toolkit";
import isShowMenuReducer from "./features/isShowMenuSlice";

export const store = configureStore({
  reducer: {
    isShowMenu: isShowMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
