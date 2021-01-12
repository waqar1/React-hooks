import React, { memo, useEffect, useRef } from 'react';

export const Hello = memo(({ increment }) => {

  const renders = useRef(0);
  console.log('renders: ', renders.current++);

  useEffect(() => {
    console.log('render');
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      console.log('unmount');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log('render1');
  }, []);

  return (
    <div>
      <div>Hello</div>
      {increment && <button onClick={increment}>Increment</button>}
    </div>
  );
});