import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const getValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn("LocalStorage not found");
      return initialValue;
    }
  }, [initialValue, key]);

  const [stateValue, setStateValue] = useState<T>(getValue());

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    const newValue = value instanceof Function ? value(stateValue) : value;

    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStateValue(newValue);

      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn("LocalStraoge not found");
    }
  };

  return [stateValue, setValue];
}
