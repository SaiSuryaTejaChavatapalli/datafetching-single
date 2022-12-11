import React, { useState } from "react";

function HookCounterTwo() {
  const initial = 0;
  const [count, setCount] = useState(initial);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment 1
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement 1
      </button>
      <button onClick={() => setCount(0)}> Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
