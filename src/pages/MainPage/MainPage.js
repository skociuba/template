import React, {Fragment, useContext, useEffect} from 'react';

import Context from '../../context/Context';
const MainPage = () => {
  const {state, dispatch} = useContext(Context);

  useEffect(() => {}, [state.posts]);

  const postTitles = state.posts.map((post) => (
    <div key={post.id}>
      <div>
        {' '}
        {post}
        <button
          onClick={() => {
            dispatch({type: 'DELETE_NOTE', payload: post.id});
          }}>
          remove
        </button>
      </div>
    </div>
  ));

  return <Fragment>{postTitles}</Fragment>;
};

export default MainPage;
