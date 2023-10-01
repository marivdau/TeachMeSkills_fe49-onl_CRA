import { allPostsReducer } from '#features/all-posts/all-posts.slice';
import { hamburgerOpenReducer } from '#features/header/header.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { voteUpDownReducer } from '#features/voting-up-down/voting-up-down-selected-post/voting-up-down-selected-post.slice';
import { tabPanelReducer } from '#ui/tabs/tab-panel/tab-panel.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    signUpForm: signUpFormReducer,
    voteUpDown: voteUpDownReducer,
    allPosts: allPostsReducer,
    hamburgerMenu: hamburgerOpenReducer,
    tabPanel: tabPanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
