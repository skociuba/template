import React, {Suspense, useLayoutEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {shared} from 'sharedConstants';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {media, useMedia} from 'components/Media';
import Button from '@material/react-button';

import {RouteWithSubRoutes} from '../../routes.config';

import Menu from './Menu/Menu';
import {appCheckConfig} from './actions';
import {applicationWrapper, mobileApplicationWrapper} from './Application.style';

export const handleNavigate = (navigate, to) => {
  const toElements = to?.split(':') || [];

  if (toElements.includes('http') || toElements.includes('https')) {
    window.open(to, '_blank');
  } else {
    navigate(to);
  }
};

const Application = () => {
  const [checked, setChecked] = useState(true);
  const isMobile = useMedia(media.device.mobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = useSelector((state) => state.application.config);

  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      dispatch(appCheckConfig());
    }
  });

  const handleContent = () => {
    if (checked) {
      setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };
  const handleNavigation = (to) => {
    handleNavigate(navigate, to);
    handleContent();
  };

  const headerData = {
    ...shared.header,
    menu: {
      ...shared.header.menu,
      primary: [
        ...shared.header.menu.primary.map((menuItem) => {
          return {
            name: menuItem.name,
            to: menuItem.to,
          };
        }),
      ],
    },
  };
  const content = () => {
    if (isMobile) {
      return (
        <Grid>
          <Row>
            {checked ? (
              ''
            ) : (
              <Cell columns={3}>
                <Menu
                  data={headerData}
                  handleNavigation={handleNavigation}
                  rightSideMenuElements={<div />}
                />
              </Cell>
            )}

            <Cell columns={checked ? 8 : 5}>
              <div className={mobileApplicationWrapper}>
                <Button onClick={() => handleContent()}>|||</Button>
                <Suspense fallback={<div />}>
                  <RouteWithSubRoutes />
                </Suspense>
              </div>
            </Cell>
            <Cell>
              <div />
            </Cell>
          </Row>
        </Grid>
      );
    } else {
      return (
        <>
          <Menu
            data={headerData}
            handleNavigation={handleNavigation}
            rightSideMenuElements={<div />}
          />
          <div className={applicationWrapper}>
            <Suspense fallback={<div />}>
              <RouteWithSubRoutes />
            </Suspense>
          </div>
        </>
      );
    }
  };
  return <> {content()}</>;
};
export default Application;
