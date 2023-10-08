import { createSlice } from '@reduxjs/toolkit';

const themeSwitcherSlice = createSlice({
  name: 'themeSwitcherSlice',
  initialState: {
    isDarkThemeActive: false,
  },
  reducers: {
    turnOnDarkTheme(state) {
      state.isDarkThemeActive = true;
      console.log(state.isDarkThemeActive);
    },
    turnOffDarkTheme(state) {
      state.isDarkThemeActive = false;
      console.log(state.isDarkThemeActive);
    },
  },
});

export const {
  actions: { turnOnDarkTheme, turnOffDarkTheme },
  reducer: themeSwitcherReducer,
} = themeSwitcherSlice;
