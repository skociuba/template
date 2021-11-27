import {css} from 'emotion.instance';

export const contentContainer = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const lightTheme = css`
  background-color: white;
  color: black;
  height: 100vh;
`;

export const darkTheme = css`
  background-color: black;
  color: white;
  height: 100vh;
`;
