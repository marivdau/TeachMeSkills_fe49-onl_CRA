import { activationSaga } from '#features/auth/activation.sagas';
import { registerSaga } from '#features/auth/registration.sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([registerSaga(), activationSaga()]);
}
