import React, { useCallback, useState } from 'react';
import { Hello } from './Hello';

const Callbackhook = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment}/>
      <div>Count: {count}</div>
    </div>
  );
}

export default Callbackhook;
