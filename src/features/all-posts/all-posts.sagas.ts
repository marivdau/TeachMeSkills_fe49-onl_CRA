import { call, put, select, takeLatest } from 'typed-redux-saga';
import { RootState } from '../../store';
import { getAllPosts } from './all-posts.slice';
import {api} from './api';

export function* allPostsSaga() {
    yield takeLatest(getAllPosts, function* activateHandler({ payload }) {
      
      try {
        const data = yield* call(api.getAllPosts, payload);
        console.log(data);
        // yield put(activationSuccess());
      } catch {
        // yield put(activationFailure());
      }
    });
  }
  