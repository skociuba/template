import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Button from '@material/react-button';
import '../../../index.scss';

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({increment}));
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <Button onClick={increment}>button from child component</Button>
      <h2>Count: {count}</h2>
    </div>
  );
});
export default Child;
