import{ useState, useEffect,useRef } from "react";
const useLocalStorage = (
  key,
  standardDefault = '',
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

  
  const refKey = useRef(key)


  useEffect(() => {
    const prevKey = refKey.current
    if (prevKey !== key) {
       window.localStorage.removeItem(key);
    }
    refKey.current= key
  },[key])

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
};

export { useLocalStorage};