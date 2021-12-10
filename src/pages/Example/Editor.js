import React, {useState, useRef, useEffect} from 'react';
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
export default ({post}) => {
  const [show, setShow] = useState(true);
  const [posts, setPost] = useState('');
  const dispatch = useDispatch();
  const myFunc = () => {
    setShow(!show);
  };

  let ref = useRef();
  useEffect(() => {
    ref.current.focus();
  });

  const handleEdit = (id) => {
    dispatch(editTitles(id));
  };

  const handleChange = (event) => {
    setPost(event.target.value);
  };
  console.log(handleEdit());
  const handleSubmit = (event) => {
    event.preventDefault();
    if (posts.trim() === '') {
      setShow(!show);
    } else {
      handleEdit(posts);
      setPost('');
      setShow(!show);
    }
  };

  const button = posts.trim() === '' ? `close` : `update`;
  const showing = show ? (
    <StyledButton
      ref={ref}
      onClick={() => {
        myFunc();
      }}>
      Edit
    </StyledButton>
  ) : (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <Info>
          {' '}
          <input ref={ref} onChange={handleChange} value={posts} name="" id="" />
        </Info>
        <StyledButton>{button}</StyledButton>
      </form>
    </div>
  );
  return (
    <div>
      <p>{showing}</p>
    </div>
  );
};
