import { useState } from "react";
import useDebouncer from "../hooks/useDebouncer";

/**
 *
 * In cases where you're working with a value that updates frequently, such as a text input.
 * Create a custom hook useDebounce() that allows you to debounce such values.
 *
 * Here's how you can implement it:
 *
 * function App() {
 *  const [value, setValue] = useState(...)  // Assume this value updates often
 * const debounceValue = useDebounce(value, 1000) // Value is debounced with a delay of 1000
 *
 * This setup ensures
 * }
 */

const DebounceHookTester = () => {
  const [text, setText] = useState("");
  const debouncedValue = useDebouncer(text, 3000);
  return (
    <div>
      <h2>Debounce Hook Tester</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
        style={{ marginRight: "10px" }}
      />
      <p>Debounced text: {debouncedValue}</p>
    </div>
  );
};

export default DebounceHookTester;
