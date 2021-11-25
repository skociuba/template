import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Checkbox from '@material/react-checkbox';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchBooleanChose} from '../actions';
import {testBooleanSelector} from '../selectors';
const CheckboxWithReduxState = () => {
  const dispatch = useDispatch();

  const initBoolean = useSelector((state) => testBooleanSelector(state));

  const [boolean, setBoolean] = useState(initBoolean);

  const handleBoolean = () => {
    if (boolean) {
      setBoolean(!boolean);
      dispatch(fetchBooleanChose(!boolean));
    } else {
      setBoolean(!boolean);
      dispatch(fetchBooleanChose(!boolean));
    }
  };

  return (
    <div>
      <p>RADIO WITH STATE IN REDUX</p>
      <div>
        <Checkbox
          checked={boolean}
          onChange={() => {
            handleBoolean();
          }}
        />
        <label htmlFor="my-checkbox">My Checkbox</label>
      </div>
    </div>
  );
};

export default CheckboxWithReduxState;
