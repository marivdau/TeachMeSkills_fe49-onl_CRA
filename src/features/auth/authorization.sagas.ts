import { call, put, takeLatest } from 'typed-redux-saga';
import { api } from './api';
import {
  authorization,
  authorizationFailure,
  authorizationLogout,
  authorizationLogoutSuccess,
  authorizationSuccess,
} from './authorization.slice';
import { resetTokens, setTokens } from '../../api/tokens';

export function* authorizationSaga() {
  yield takeLatest(authorization, function* ({ payload }) {
    const tokens = yield* call(api.autorization, payload);
    if (tokens) {
      yield call(setTokens, tokens);
      yield put(authorizationSuccess());
    } else {
      yield put(authorizationFailure());
    }
  });
}

export function* authorizationLogoutSaga() {
  yield takeLatest(authorizationLogout, function* ({ payload }) {
    yield call(resetTokens);
    yield put(authorizationLogoutSuccess());
  });
}
