import { call, put, takeLatest } from 'typed-redux-saga';
import { getAllPosts, getAllPostsSuccess } from './all-posts.slice';
import { api } from './api';

export function* allPostsSaga() {
  yield takeLatest(getAllPosts, function* activateHandler({ payload }) {
    try {
      const data = yield* call(api.getAllPosts, payload);
      yield put(getAllPostsSuccess({ data }));
    } catch {
      // yield put(activationFailure());
    }
  });
}
