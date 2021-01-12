import { useEffect, useLayoutEffect, useRef } from "react";

export const useEffectLayoutCustom = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current = 'some value';
  });

  useLayoutEffect(() => {
    console.log(ref.current); // logs old value
  });
};