import { createSlice } from '@reduxjs/toolkit';
import { ActivationPayload } from './types';

const activationSlice = createSlice({
  name: 'activationSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    activation(state, action: { payload: ActivationPayload }) {
      // state.isInProgress = true;
    },
    setInProgress(state) {
      state.isInProgress = true;
    },
    activationSuccess(state) {
      state.isInProgress = false;
      state.isCompleted = true;
    },
    activationFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { activation, activationSuccess, activationFailure, setInProgress },
  reducer: activationReducer,
} = activationSlice;
