import { Reducer } from 'redux';
import { Counter, CounterTypes } from './types';

const INITIAL_STATE: Counter = {
  count: 5,
};

const reducer: Reducer<Counter> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterTypes.ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterTypes.SUBTRACT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
