import {css} from 'emotion.instance';

export const sortingContainer = css`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 45px;

  & button {
    padding: 10px;
  }
`;

export const sorterContainer = (index) => css`
  position: relative;
  top: -2px;
  margin-left: 5px;
  width: 14px;
  height: 16px;
  display: flex;
  flex-direction: column;

  &: first-child {
    i {
      color: ${index === 2 ? '#6a899c ' : '#6a899c'};
    }
  }

  &: last-child {
    i {
      color: ${index === 1 ? '#6a899c' : '#6a899c'};
    }
  }
`;

export const dataContainer = css`
  padding: 20px;
  border: 1px solid black;
`;
