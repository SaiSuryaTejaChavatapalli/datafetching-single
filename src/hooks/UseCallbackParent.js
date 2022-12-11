import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallbackParent() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const updateCounterFromChild = useCallback(
    () => setCounter(counter + 1),
    [counter]
  );

  return (
    <div>
      <h1>Hello from Parent :{counter}</h1>
      <button onClick={updateCounterFromChild}>+1</button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <UseCallbackChild
        counter={counter}
        updateCounter={updateCounterFromChild}
      />
    </div>
  );
}

export default UseCallbackParent;
