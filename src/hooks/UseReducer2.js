import React, { useReducer } from "react";
const initalState = {
  counterOne: 0,
  counterTwo: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrement":
      return { ...state, counterOne: state.counterOne - action.value };
    case "increment2":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrement2":
      return { ...state, counterTwo: state.counterTwo - action.value };
    case "reset":
      return initalState;
    default:
      return state;
  }
};
function UseReducer2() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <div>Counter one {count.counterOne}</div>
      <div>Counter Two {count.counterTwo}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducer2;
