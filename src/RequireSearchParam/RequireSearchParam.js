import React from 'react';
import {Navigate, useSearchParams} from 'react-router-dom';
import {shared} from 'sharedConstants';

const paths = {...shared.routes};

const RequireSearchParam = ({children, path}) => {
  const [searchParam] = useSearchParams();

  if (path === paths.testPage.root) {
    try {
      const market = searchParam.get('market');
      const productAlternativeClassificationCode = searchParam.get(
        'productAlternativeClassificationCode',
      );
      const productAlternativeNumber = searchParam.get('productAlternativeNumber');
      const productTypeCode = searchParam.get('productTypeCode');

      if (
        productTypeCode &&
        market &&
        productAlternativeClassificationCode &&
        productAlternativeNumber
      ) {
        sessionStorage.setItem(
          productAlternativeNumber,
          JSON.stringify({
            productTypeCode,
            market,
            productAlternativeClassificationCode,
            productAlternativeNumber,
          }),
        );
        return <Navigate to={`${paths.testPage.root}/${productAlternativeNumber}`} />;
      } else {
        return <Navigate to={paths.mainPage.root} />;
      }
    } catch (error) {
      console.error('session storage is unavailable', error);
      return <Navigate to={paths.mainPage.root} />;
    }
  }

  return children;
};

export default RequireSearchParam;
