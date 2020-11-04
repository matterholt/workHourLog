import React, { useState, useEffect } from "react";
import { companyRecommendedTime } from '../helpers/standardDefaults/companyRecommendedTime'

const useLocalStorage = (
  key,
  standardDefault = companyRecommendedTime,
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