import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import Radio, {NativeRadioControl} from '@material/react-radio';
import Skeleton from 'react-loading-skeleton';

import '../../index.scss';

import {shared} from '../../routesConstants';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
const Test = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const history = useHistory();

  const handleSwitch = () => history.push({pathname: shared.routes.mainPage.root});
  const data = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      <button onClick={handleSwitch}>go to main page</button>

      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            {user.name}--{user.trips}
            {user?.airline?.map((item) => (
              <p key={item.id}>
                {item.name}--{item.head_quaters}
              </p>
            ))}
          </div>
        ))}
    </section>
  );
  return (
    <div>
      <div>
        <Radio label="show" key="data">
          <NativeRadioControl
            id="data"
            checked={content === data}
            onChange={() => {
              setContent(data);
            }}
          />
        </Radio>
        <Radio label="hide" key="noData">
          <NativeRadioControl
            id="noData"
            checked={content === ''}
            onChange={() => {
              setContent('');
            }}
          />
        </Radio>
      </div>
      {content}
    </div>
  );
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
