import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fetchTitles, addTitles, removeTitles} from './actions';
import ReduxInput from './AddToDo';
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
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  background-color: #002f75;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-right: 0px;
  }
`;

const Item = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  background: #833ab4;
  background: -webkit-linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  width: 100%;
`;

class Example extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTitles();
  }

  render() {
    const onDelete = (id) => {
      this.props.removeTitles(id);
    };

    const postTitles = this.props.example.map((title, i) => (
      <div key={i}>
        <h3>
          {title} <StyledButton onClick={() => onDelete(i)}>X </StyledButton>
        </h3>
      </div>
    ));

    return (
      <Fragment>
        <Info>
          <Item>
            <ReduxInput />
            {postTitles}
          </Item>
        </Info>
      </Fragment>
    );
  }
}
Example.propTypes = {
  example: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  example: state.example.example,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTitles: () => dispatch(fetchTitles()),
    addTitles: () => dispatch(addTitles()),
    removeTitles: (id) => dispatch(removeTitles(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Example);
