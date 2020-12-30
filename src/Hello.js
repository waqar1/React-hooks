import React, { useEffect } from 'react';

export const Hello = () => {
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

  return <div>Hello</div>;
}