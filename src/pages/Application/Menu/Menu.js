import React, {useState} from 'react';
import Button from '@material/react-button';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import '../../../index.scss';
import {menuTheme} from './Menu.style';

const Menu = ({data, handleNavigation}) => {
  const [menuSelected, setMenuSelected] = useState(false);

  const isMenuSelected = (to) => {
    if (window.location.hash && window.location.hash.substring(1) === to) {
      setMenuSelected(true);
    }
    setMenuSelected(false);
  };

  const menuItem = data.menu.primary.map((item, i) => (
    <div key={i}>
      <Cell>
        <Button
          onClick={() => (
            handleNavigation(item.to), isMenuSelected(item.to), window.location.reload(false)
          )}>
          {item.name}
        </Button>
      </Cell>
    </div>
  ));
  console.log(menuSelected);
  return (
    <div className={menuTheme}>
      <Grid>
        <Row>{menuItem}</Row>
      </Grid>
    </div>
  );
};
export default Menu;
