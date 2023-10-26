import { createSlice } from '@reduxjs/toolkit';
import { SwapiResponse } from './types';

export interface ISwapi {
  name: string;
  gravity: string;
  url: string;
  rotation_period: number;
}

const swapiSlice = createSlice({
  name: 'swapiSlice',
  initialState: {
    swapi: {} as ISwapi,
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getSwapi(state) {
      state.isLoading = true;
    },
    getSwapiSuccess(state, action: { payload: { data: SwapiResponse } }) {
      state.isLoading = false;
      const data = action.payload.data;
      state.swapi = data;
    },
    getSwapiFailure(state, error: { payload: unknown }) {
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
  actions: { getSwapi, getSwapiSuccess, getSwapiFailure },
  reducer: swapiReducer,
} = swapiSlice;
