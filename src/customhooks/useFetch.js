import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [stateData, setStateData] = useState({ data: null, loading: true });

  useEffect(() => {
    setStateData(state => ({ data: state.data, loading: true }));
    fetch(url).then(response => response.text())
      .then(resp => {
        setStateData({data: resp, loading: false});
      });
  }, [url]);

  return stateData;
};