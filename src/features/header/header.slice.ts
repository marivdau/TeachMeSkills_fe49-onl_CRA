import { createSlice } from '@reduxjs/toolkit';

const hamburgerOpenSlice = createSlice({
  name: 'hamburgerOpen',
  initialState: {
    hamburgerOpen: false,
  },
  reducers: {
    openMenu(state) {
      state.hamburgerOpen = true;
    },
    closeMenu(state) {
      state.hamburgerOpen = false;
    },
    toggle(state) {
      state.hamburgerOpen = !state.hamburgerOpen;
    },
  },
});

export const {
  actions: { openMenu, closeMenu, toggle },
  reducer: hamburgerOpenReducer,
} = hamburgerOpenSlice;
