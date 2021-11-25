import React, {useRef} from 'react';
import Button from '@material/react-button';

import '../../index.scss';
import Child from './Child/Child';
const Parent = () => {
  const ref = useRef();
  return (
    <div>
      <Child ref={ref} />
      <Button onClick={() => ref.current.increment()}>button from parent component</Button>
    </div>
  );
};

export default Parent;
