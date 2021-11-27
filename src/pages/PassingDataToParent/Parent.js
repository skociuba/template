import React, {useState, useCallback} from 'react';

import '../../index.scss';
import Child from './Child/Child';
const Parent = () => {
  const [count, setCount] = useState(0);

  const callback = useCallback((item) => {
    setCount(item);
  }, []);

  return (
    <div>
      <Child parentCallback={callback} />
      <h2>{count}</h2>
    </div>
  );
};

export default Parent;
