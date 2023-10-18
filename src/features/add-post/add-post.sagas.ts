import { call, put, takeLatest } from 'typed-redux-saga';
import { addNewPost, addNewPostSuccess } from './add-post.slice';
import { api } from './api';

export function* addNewPostSaga() {
  yield takeLatest(addNewPost, function* addNewPostHundler({ payload }) {
    try {
      const data = yield* call(api.addNewPost, payload);
      console.log(data);

      yield put(addNewPostSuccess());
    } catch {
      // yield put(activateFailure());
    }
  });
}