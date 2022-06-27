import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Search} from 'components/Packages/Search';

import 'react-loading-skeleton/dist/skeleton.css';
import {contentContainer} from '../../pages/MainPage/MainPage.style';

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

const SearchDisplay = () => {
  const [searchResults, setSearchResults] = useState(constants.fullContent);

  const handleSearch = (query) => {
    const results = getSearchResult(query, constants.fullContent);
    setSearchResults(results);
  };

  return (
    <div className={contentContainer}>
      {' '}
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
      </section>
    </div>
  );
};

SearchDisplay.propTypes = {
  fetchTestData: PropTypes.func,
};

export default SearchDisplay;
