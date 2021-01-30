import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { addCount, subtractCount } from '../../store/ducks/counter/actions';

const Home: React.FC = () => {
  const counter = useSelector((state: ApplicationState) => state.counter);
  const dispatch = useDispatch();

  const onRaise = (): void => {
    dispatch(addCount());
  };

  const onLower = (): void => {
    dispatch(subtractCount());
  };

  return (
    <div className="this">
      <button type="button" onClick={onLower}>
        -
      </button>
      <div>{counter.count}</div>
      <button type="button" onClick={onRaise}>
        +
      </button>
    </div>
  );
};

export default Home;
