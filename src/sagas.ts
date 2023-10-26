import { addNewPostSaga } from '#features/add-post/add-post.sagas';
import { allPostsSaga } from '#features/all-posts/all-posts.sagas';
import { activationSaga } from '#features/auth/activation.sagas';
import { authorizationLogoutSaga, authorizationSaga } from '#features/auth/authorization.sagas';
import { registerSaga } from '#features/auth/registration.sagas';
import { searchSaga } from '#features/search/search.sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    registerSaga(),
    activationSaga(),
    authorizationSaga(),
    allPostsSaga(),
    addNewPostSaga(),
    searchSaga(),
    authorizationLogoutSaga(),
  ]);
}
