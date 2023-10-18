import { createSlice } from '@reduxjs/toolkit';
import { AllPostsResponse } from './types';

const initialState = {
  searchedPosts: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  } as AllPostsResponse,

  isInProgress: false,
  isCompleted: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',

  initialState: initialState,

  reducers: {
    search(state, action: { payload: string }) {
      state.isInProgress = true;
    },

    searchSuccess(state, action: { payload: AllPostsResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.searchedPosts = action.payload;
    },

    searchFailure(state) {
      state.isInProgress = false;
    },

    reset(state) {
      state.searchedPosts = initialState.searchedPosts;
    },
  },
});

export const { search, searchSuccess, searchFailure, reset } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
