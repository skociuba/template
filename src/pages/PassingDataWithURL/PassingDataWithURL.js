import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../index.scss';
import {shared} from 'sharedConstants';
import 'react-loading-skeleton/dist/skeleton.css';
import Button from '@material/react-button';
const PassingDataWithURL = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (query) => {
    navigate({pathname: `${shared.routes.mainPage.root}?q=${query}`});
  };

  const handleSearch = () => {
    onSearch(value);
    setValue('');
  };

  return (
    <div>
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <Button onClick={handleSearch}>pass data using url to mainPage</Button>
      </form>
    </div>
  );
};

export default PassingDataWithURL;
