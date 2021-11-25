import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import Checkbox from '@material/react-checkbox';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchCheckboxChose} from '../actions';
import {testBooleanSelector} from '../selectors';
const CheckboxWithReduxState = () => {
  const dispatch = useDispatch();

  const initBoolean = useSelector((state) => testBooleanSelector(state));
  const [boolean, setBoolean] = useState(initBoolean);

  const handleBoolean = (e) => {
    if (boolean) {
      //setBoolean(!boolean);   or
      setBoolean(e?.target?.boolean);
      dispatch(fetchCheckboxChose(!boolean));
    } else {
      //setBoolean(!boolean);   or
      setBoolean(!e?.target?.boolean);
      dispatch(fetchCheckboxChose(!boolean));
    }
  };
  return (
    <div>
      <p>CHECKBOX WITH STATE IN REDUX</p>
      <div>
        <form>
          <input
            type="checkbox"
            checked={boolean}
            onChange={() => {
              handleBoolean();
            }}
          />
          <label htmlFor="my-checkbox">My Checkbox</label>
        </form>
      </div>
    </div>
  );
};

export default CheckboxWithReduxState;
