/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put } from 'redux-saga/effects';

import { addCount, subtractCount } from './actions';

export function* raiseCount() {
  yield put(addCount());
}

export function* lowerCount() {
  yield put(subtractCount());
}
