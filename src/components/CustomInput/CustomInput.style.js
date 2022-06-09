import {css} from 'emotion.instance';

export const input = (prefix, suffix) => css`
  height: 30px;
  border: none;
  box-sizing: border-box;
  padding-left: ${prefix ? '45px' : '0'};
  padding-right: ${suffix ? '45px' : '0'};
  width: 200px;
`;
export const container = css`
  span:first-child {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
  span:last-child {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;
