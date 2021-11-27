import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Checkbox from '@material/react-checkbox';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchCheckboxChose} from '../actions';
import {testCheckboxSelector} from '../selectors';
const CheckboxWithReduxState = () => {
  const dispatch = useDispatch();

  const initBoolean = useSelector((state) => testCheckboxSelector(state));

  const handleBoolean = (e) => {
    if (initBoolean) {
      dispatch(fetchCheckboxChose(!initBoolean));
    } else {
      dispatch(fetchCheckboxChose(!initBoolean));
    }
  };
  return (
    <div>
      <p>CHECKBOX WITH STATE IN REDUX</p>
      <div>
        <Checkbox
          checked={initBoolean}
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
