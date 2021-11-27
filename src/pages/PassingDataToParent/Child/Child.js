import React, {useState} from 'react';
import Button from '@material/react-button';
import '../../../index.scss';

const Child = ({parentCallback}) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    parentCallback(count + 1);
  };
  return (
    <div>
      <Button onClick={increment}>button from child component</Button>
    </div>
  );
};
export default Child;
