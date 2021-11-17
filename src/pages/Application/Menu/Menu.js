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

  const handleClick = () => {
    handleNavigation(data[0].to);
    isMenuSelected(data[0].to);
  };

  const menuItem = <li onClick={handleClick}>{data[0].name}</li>;
  console.log(menuSelected);

  return (
    <div>
      <Button color="secondary">HOME</Button>
      <Button color="secondary">BUTTON</Button>
      {menuItem}
    </div>
  );
};
export default Menu;
