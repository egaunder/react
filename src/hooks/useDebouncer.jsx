import { useEffect, useState } from "react";

const useDebouncer = (value, timeInMs) => {
  const [debouncedValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeInMs);
    return () => clearTimeout(timer);
  }, [value, timeInMs]);

  return debouncedValue;
};

export default useDebouncer;
