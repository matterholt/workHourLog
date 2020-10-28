import React, { useState, useEffect } from "react";

const useLocalStorage = (
  key,
  standardDefault = '00:00',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof standardDefault === "function"
      ? standardDefault()
      : standardDefault;
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  });

  return [state, setState];
};

export { useLocalStorage};