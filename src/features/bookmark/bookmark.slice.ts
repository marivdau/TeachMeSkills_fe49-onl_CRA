import { createSlice } from '@reduxjs/toolkit';
import { postCardsListMockArray } from '../../mock-data/mock-data-posts';

type Payload = {
  cardId: number;
};

type Favourite = {
  favourite: 'yes' | null;
};

const fromMockArrayForFavourite = postCardsListMockArray.reduce(
  (accumulator, value) => {
    return {
      ...accumulator,
      [value.id]: {
        isFavorite: value.isFavorite,
      } as unknown as Favourite,
    };
  },
  {}
);

export const settingFavourite = createSlice({
  name: 'votingNumberUpDown',
  initialState: fromMockArrayForFavourite as Record<number, Favourite>,
  reducers: {
    setFavourite(state, action: { payload: Payload }) {
      const data = state[action.payload.cardId];
      if (!data) return;

      if (data.favourite === 'yes') {
        data.favourite = null;
        return;
      }

      data.favourite = 'yes';
    },
  },
});

export const {
  actions: { setFavourite },
  reducer: settingFavouriteReducer,
} = settingFavourite;
