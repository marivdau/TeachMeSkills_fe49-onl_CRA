import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationPayload } from './types';

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: {},
  reducers: {
    authorization(state, action: {payload: AuthorizationPayload}) {},
    authorizationSuccess(state) {},
    authorizationFailure(state) {},
  },
});

export const {
  actions: { authorization, authorizationSuccess, authorizationFailure },
  reducer: authorizationreducer,
} = authorizationSlice;
