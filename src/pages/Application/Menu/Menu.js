import React, {useState} from 'react';
import Button from '@material/react-button';

import '../../../index.scss';

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
      <Button
        onClick={() => (
          handleNavigation(item.to), isMenuSelected(item.to), window.location.reload(false)
        )}>
        {item.name}
      </Button>
    </div>
  ));
  console.log(menuSelected);
  return <div>{menuItem}</div>;
};
export default Menu;
