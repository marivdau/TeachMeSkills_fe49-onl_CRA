import { select, call, put, takeLatest, takeEvery } from 'typed-redux-saga';
import {
  activation,
  activationSuccess,
  activationFailure,
  setInProgress,
} from './activation.slice';
import { api } from './api';
import { RootState } from '../../store';

export function* activationSaga() {
  yield takeEvery(activation, function* activateHandler({ payload }) {
    const isInProgress = yield* select(
      (state: RootState) => state.activation.isInProgress
    );
    if (isInProgress) return;
    yield put(setInProgress());
    try {
      const data = yield* call(api.activation, payload);
      console.log(data);
      yield put(activationSuccess());
    } catch {
      yield put(activationFailure());
    }
  });
}
