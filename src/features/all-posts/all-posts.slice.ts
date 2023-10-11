import { createSlice } from '@reduxjs/toolkit';
import { AllPostsPayload, AllPostsResponse } from './types';

export interface Post {
  id: number;
  title: string;
  text: string;
}

const allPostsSlice = createSlice({
  name: 'allPostsSlice',
  initialState: {
    posts: [] as Post[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getAllPosts(state, action: { payload: AllPostsPayload }) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: { data: AllPostsResponse } }) {
      const data = action.payload;
      const allPostsFromApi = data.data.results;
      state.posts = allPostsFromApi;
    },
    getAllPostsFailure(state, error: { payload: unknown }) {
      if (
        typeof error.payload === 'object' &&
        error.payload &&
        'message' in error.payload &&
        typeof error.payload.message === 'string'
      ) {
        state.error = { name: 'Error', message: error.payload.message };
      }
      state.error = { name: 'Error', message: String(error) };
    },
  },
});

export const {
  actions: { getAllPosts, getAllPostsSuccess, getAllPostsFailure },
  reducer: allPostsReducer,
} = allPostsSlice;
