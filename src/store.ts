import { allPostsReducer } from '#features/all-posts/all-posts.slice';
import { hamburgerOpenReducer } from '#features/header/header.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { voteUpDownReducer } from '#features/voting-up-down/voting-up-down-selected-post/voting-up-down-selected-post.slice';
import { tabPanelReducer } from '#ui/tabs/tab-panel/tab-panel.slice';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';
import { registrationReducer } from '#features/auth/registration.slice';
import { activationReducer } from '#features/auth/activation.slice';
import { dialogImagePreviewReducer } from '#features/dialog-image-preview/dialog-image-preview.slice';
import { authorizationreducer } from '#features/auth/authorization.slice';
import { settingFavouriteReducer } from '#features/bookmark/bookmark.slice';
import { themeSwitcherReducer } from '#features/theme-switcher/theme-switcher.slice';
import { addNewPostReducer } from '#features/add-post/add-post.slice';
import { searchReducer } from '#features/search/search.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const allReducers = {};

export const store = configureStore({
  reducer: {
    activation: activationReducer,
    addPost: addNewPostReducer,
    authorization: authorizationreducer,
    allPosts: allPostsReducer,
    favouritePost: settingFavouriteReducer,
    hamburgerMenu: hamburgerOpenReducer,
    dialogImagePreview: dialogImagePreviewReducer,
    registration: registrationReducer,
    search: searchReducer,
    signUpForm: signUpFormReducer,
    tabPanel: tabPanelReducer,
    themeSwitcher: themeSwitcherReducer,
    voteUpDown: voteUpDownReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
