import { createSlice } from '@reduxjs/toolkit';

const tabPanelSlice = createSlice({
  name: 'tabPanelSlice',
  initialState: {
    activeTab: null as string | null,
  },
  reducers: {
    setActiveTab(state, action: {payload: string}) {
      state.activeTab = action.payload;
    },
  },
});

export const {
  actions: { setActiveTab },
  reducer: tabPanelReducer,
} = tabPanelSlice;
