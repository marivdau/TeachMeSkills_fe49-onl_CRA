import { allPostsReducer } from '#features/all-posts/all-posts.slice';
import { hamburgerOpenReducer } from '#features/header/header.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { voteUpDownReducer } from '#features/voting-up-down/voting-up-down-selected-post/voting-up-down-selected-post.slice';
import { tabPanelReducer } from '#ui/tabs/tab-panel/tab-panel.slice';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';
import { registrationReducer } from '#features/auth/registration.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const allReducers = {};

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
    hamburgerMenu: hamburgerOpenReducer,
    registration: registrationReducer,
    signUpForm: signUpFormReducer,
    tabPanel: tabPanelReducer,
    voteUpDown: voteUpDownReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
