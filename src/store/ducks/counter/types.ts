/* eslint-disable no-shadow */

//
export enum CounterTypes {
  ADD_COUNT = '@counter/ADD_COUNT',
  SUBTRACT_COUNT = '@counter/SUBTRACT_COUNT',
}

// Formato
export interface Counter {
  count: number;
}

// Action type -> normal action typing
// Data type -> type of the data that will return
// State type -> initial state of the reducer (put readonly on the data)
