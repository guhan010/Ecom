// import React from "react";

import { useMemo, useState } from "react";

const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseCounter1 = () => {
    setCounter1((prev) => prev + 1);
  };
  const increaseCounter2 = () => {
    setCounter2((prev) => prev + 1);
  };
  const even = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return counter1 % 2 === 0;
  }, [counter1]);
  //   const even = () => {
  //     for (let i = 0; i < 1000000000; i++) {}
  //     return counter1 % 2 === 0;
  //   };

  return (
    <div>
      <h1>{counter1}</h1>
      <p>{even ? "even number" : "odd number"}</p>
      <button onClick={increaseCounter1}>Increase Counter 1</button>
      <h1>{counter2}</h1>
      <button onClick={increaseCounter2}>Increase Counter 2</button>
    </div>
  );
};

export default Counter;
