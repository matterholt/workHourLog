import React, { useState, useEffect } from "react";


const companyRecomendedTime = {
  punchIn: "08:00",
  punchOut: "16:30",
  lunchTime: "12:00",
  hrToEat: 0.5,
};

const useLocalStorage = (
  key,
  standardDefault = companyRecomendedTime,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [defaultTimes, setDefaultTimes] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      deserialize(valueInLocalStorage);
    }
    return typeof standardDefault === "function"
      ? standardDefault()
      : standardDefault;
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(defaultTimes));
  });

  return [defaultTimes, setDefaultTimes];
};

export { useLocalStorage};