/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
import Button from '@material/react-button';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {media, useMedia} from 'components/Media';

import '../../../index.scss';
import {menuTheme} from './Menu.style';

const Menu = ({data, handleNavigation}) => {
  const isMobile = useMedia(media.device.mobile);
  const [menuSelected, setMenuSelected] = useState(false);

  const isMenuSelected = (to) => {
    if (window.location.hash && window.location.hash.substring(1) === to) {
      setMenuSelected(true);
    }
    setMenuSelected(false);
  };

  const menuMobile = data.menu.primary.map((item, i) => (
    <Row key={i}>
      <Cell columns={1}>
        <Button
          onClick={() => (
            handleNavigation(item.to), isMenuSelected(item.to), window.location.reload(false)
          )}>
          {item.name}
        </Button>
      </Cell>
    </Row>
  ));

  const menuDesktop = data.menu.primary.map((item, i) => (
    <Cell columns={1} key={i}>
      <Button
        onClick={() => (
          handleNavigation(item.to), isMenuSelected(item.to), window.location.reload(false)
        )}>
        {item.name}
      </Button>
    </Cell>
  ));
  const menu = isMobile ? (
    menuMobile
  ) : (
    <Grid>
      <Row>{menuDesktop}</Row>
    </Grid>
  );
  console.log(menuSelected);
  return <div className={menuTheme}>{menu}</div>;
};
export default Menu;
