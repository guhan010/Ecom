// import React from "react";
import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Main = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseCounter1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, [counter1]);
const date = new Date()

  const increaseCounter2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, [counter2]);
  return (
    <div>
      <Count name="count1" valu={counter1} />
      <Button func={increaseCounter1} name="increase count1" />
      <Count name="count2" valu={counter2} />
      <Button func={increaseCounter2} name="increase count2" />
    </div>
  );
};

export default Main;
