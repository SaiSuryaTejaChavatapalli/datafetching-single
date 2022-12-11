import React, { useMemo, useState } from "react";

function UseMemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementCountOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCountTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCountOne}>CounterOne-{counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCountTwo}>CounterTwo-{counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemoCounter;
