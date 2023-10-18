import { createSlice } from '@reduxjs/toolkit';
import { postCardsListMockArray } from '../../mock-data/mock-data-posts';
import { IPostCard } from '../../types/post-card';

type Payload = {
  cardId: number;
};

type ImageToShow = {
  cardId: number;
  image?: string;
};

const imageArray: ImageToShow[] = postCardsListMockArray.map((item) => {
  return { cardId: item.id, image: item.image };
});

export const dialogImagePreviewSlice = createSlice({
  name: 'dialogImagePreviewSlice',
  initialState: {
    showingDialogImagePreview: false,
    allImages: imageArray,
    imageToShow: imageArray[1].image,
  },
  reducers: {
    showing(state, action: { payload: Payload }) {
      state.showingDialogImagePreview = true;
      state.imageToShow = state.allImages.find(
        (elem) => elem.cardId === action.payload.cardId
      )?.image;
    },
    hide(state) {
      state.showingDialogImagePreview = false;
    },
  },
});

export const {
  actions: { showing, hide },
  reducer: dialogImagePreviewReducer,
} = dialogImagePreviewSlice;
