import { createSlice } from "@reduxjs/toolkit";

export type IsShowMenuState = boolean;

const initialState: IsShowMenuState = false;

export const isShowMenuSlice = createSlice({
  name: "isShowMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      return !state;
    },
    hideMenu: () => {
      return false;
    },
  },
});

export const { toggleMenu, hideMenu } = isShowMenuSlice.actions;
export default isShowMenuSlice.reducer;
