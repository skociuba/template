import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Radio, {NativeRadioControl} from '@material/react-radio';

import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchBooleanChose} from '../actions';
import {testBooleanSelector} from '../selectors';
const RadioWithReduxState = () => {
  const dispatch = useDispatch();

  const initBoolean = useSelector((state) => testBooleanSelector(state));

  const [boolean, setBoolean] = useState(initBoolean);

  return (
    <div>
      <p>RADIO WITH STATE IN REDUX</p>
      <div>
        <Radio label="true" key="true">
          <NativeRadioControl
            id="true"
            checked={boolean === true}
            onChange={() => {
              setBoolean(true);
              dispatch(fetchBooleanChose(true));
            }}
          />
        </Radio>
        <Radio label="false" key="falsea">
          <NativeRadioControl
            id="false"
            checked={boolean === false}
            onChange={() => {
              setBoolean(false);
              dispatch(fetchBooleanChose(false));
            }}
          />
        </Radio>
      </div>
    </div>
  );
};

export default RadioWithReduxState;
