import {css} from '@emotion/css';

import {media} from '../../Media/Theme.style';

export const listItem = (hasVerticalPadding, hasFullWidth, noMarginBottom, isVertical) => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${isVertical ? 'row' : 'column'};
  padding: ${hasVerticalPadding ? '0 14px' : 0};
  margin: ${noMarginBottom ? 0 : '0 0 28px 0'};
  width: ${hasFullWidth ? '100%' : ' 60%'};

  @media${media.device.tablet} {
    margin: ${noMarginBottom ? 0 : '0 0 24px 0'};
  }
  @media${media.device.mobile} {
    width: 100% !important;
  }
`;
export const listItemTitle = (hasTitleBorder, isVertical) => css``;
export const listItemContent = (hasPaddingLeft, isVertical) => css``;
