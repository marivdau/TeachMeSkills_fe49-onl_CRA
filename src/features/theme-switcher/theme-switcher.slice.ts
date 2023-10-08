import { createSlice } from '@reduxjs/toolkit';

const themeSwitcherSlice = createSlice({
  name: 'themeSwitcherSlice',
  initialState: {
    isDarkThemeActive: false,
  },
  reducers: {
    turnOnDarkTheme(state) {
      state.isDarkThemeActive = true;
    },
    turnOffDarkTheme(state) {
      state.isDarkThemeActive = false;
    },
  },
});

export const {
  actions: { turnOnDarkTheme, turnOffDarkTheme },
  reducer: themeSwitcherReducer,
} = themeSwitcherSlice;
