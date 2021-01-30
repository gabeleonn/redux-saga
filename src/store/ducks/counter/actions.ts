/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { CounterTypes } from './types';

export const addCount = () => action(CounterTypes.ADD_COUNT);

export const subtractCount = () => action(CounterTypes.SUBTRACT_COUNT);
