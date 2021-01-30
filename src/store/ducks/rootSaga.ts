/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest } from 'redux-saga/effects';

import { CounterTypes } from './counter/types';
import { lowerCount, raiseCount } from './counter/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CounterTypes.ADD_COUNT, raiseCount),
    takeLatest(CounterTypes.SUBTRACT_COUNT, lowerCount),
  ]);
}
