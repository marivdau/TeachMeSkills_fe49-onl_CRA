import { createSlice } from '@reduxjs/toolkit';
import { AddNewPostType } from './types';

const addNewPostSlice = createSlice({
  name: 'addNewPostSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    addNewPost(state, action: { payload: AddNewPostType }) {
      state.isInProgress = true;
    },
    addNewPostSuccess(state) {
      state.isInProgress = false;
      state.isCompleted = true;
    },
    addNewPostFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { addNewPost, addNewPostSuccess, addNewPostFailure },
  reducer: addNewPostReducer,
} = addNewPostSlice;
