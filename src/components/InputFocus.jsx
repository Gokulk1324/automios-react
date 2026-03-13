import { useRef } from "react";

function InputFocus() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <input ref={inputRef} placeholder="Type something" />

      <button onClick={focusInput}>
        Focus Input
      </button>

    </div>
  );
}

export default InputFocus;