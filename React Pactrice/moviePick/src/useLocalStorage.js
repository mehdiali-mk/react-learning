import { useState, useEffect } from "react";

export function useLocalStorage(initialize, key) {
  const [value, setValue] = useState(function () {
    const storageData = localStorage.getItem(key);
    console.log(storageData);
    return storageData ? JSON.parse(storageData) : initialize;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
