import { call, put, takeLatest } from 'typed-redux-saga';
import { api } from './api';
import { getSwapi, getSwapiSuccess } from './swapi.slice';

export function* swapiSaga() {
  yield takeLatest(getSwapi, function* activateHandler({ payload }) {
    try {
      const data = yield* call(api.getSwapi, payload);
      yield put(getSwapiSuccess({ data }));
    } catch {}
  });
}
