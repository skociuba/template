import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {editTitles} from './actions';
const StyledButton = styled.button`
  background-color: #226de6;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: #00b38f;
    color: white;
  }
`;

const Info = styled.div`
  border: 2px solid white;
  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 5px;
  opacity: 1;
  background-color: black;
`;
export default ({post, id}) => {
  const [show, setShow] = useState(true);
  const [newPost, setNewPost] = useState(post);
  const dispatch = useDispatch();

  const handleHide = () => {
    setShow(!show);
  };

  useEffect(() => {
    dispatch(editTitles());
  }, [dispatch]);

  const handleChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPost.trim() === '') {
      setShow(!show);
    } else {
      dispatch(editTitles(newPost, id));
      setNewPost('');
      setShow(!show);
    }
  };
  console.log(editTitles(newPost, id));
  const button = newPost?.trim() === '' ? `close` : `update`;
  const showing = show ? (
    <StyledButton
      onClick={() => {
        handleHide();
      }}>
      Edit
    </StyledButton>
  ) : (
    <div className="note-form">
      <form onSubmit={handleSubmit}>
        <Info>
          <input onChange={handleChange} value={newPost} />
        </Info>
        <StyledButton type="submit">{button}</StyledButton>
      </form>
    </div>
  );
  return <div>{showing}</div>;
};
