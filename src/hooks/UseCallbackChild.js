import React, { memo } from "react";

function UseCallbackChild(props) {
  console.log("Child is Rendering");
  const { counter, updateCounter } = props;
  return (
    <div>
      <h1>Child -{counter}</h1>
      <button onClick={updateCounter}>Click</button>
    </div>
  );
}

export default memo(UseCallbackChild);
