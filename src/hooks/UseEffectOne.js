import React, { useEffect, useState } from "react";

function UseEffectOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Button clikced ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default UseEffectOne;
