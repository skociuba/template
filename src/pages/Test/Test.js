import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {Search} from 'components/Search';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './Test.style';
import constants from './constants';

export const doesQueryIncludeTextPart = (text, query) =>
  text?.toUpperCase()?.includes(query?.toUpperCase()) || false;

export const getSearchResult = (query, data) =>
  data?.map(({character, content}) => ({
    character,
    content: content
      .map(({title, text}) =>
        doesQueryIncludeTextPart(title, query) || doesQueryIncludeTextPart(text, query)
          ? {title, text}
          : null,
      )
      .filter((item) => !!item),
  })) || [];

const Test = () => {
  const [searchResults, setSearchResults] = useState(constants.fullContent);
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleSearch = (query) => {
    const results = getSearchResult(query, constants.fullContent);
    setSearchResults(results);
  };

  const componentContent = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      <Search onSearch={handleSearch} />
      {searchResults?.map(({character, content}, i) =>
        content?.length ? (
          <section key={i}>
            <h2>{character}</h2>
            {content.map(({title, text}, j) => (
              <article key={j}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </section>
        ) : null,
      )}
      <p />
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
  return <div className={contentContainer}>{componentContent}</div>;
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
