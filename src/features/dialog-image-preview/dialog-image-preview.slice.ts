import { createSlice } from '@reduxjs/toolkit';
import { IPostCard } from '../../types/post-card';

type Payload = {
  cardId: number;
};

type PropsCard = {
  card: IPostCard[];
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    isOpen: false,
  },
  reducers: {
    opening(state) {
      state.isOpen = true;
    },
    closing(state) {
      state.isOpen = false;
    },
  },
});

export const {
  actions: { opening, closing },
  reducer: modalReducer,
} = modalSlice;
