// import React from "react";
import { useContext } from "react";
import { Mycontext } from "./GrandParent";

const Child = () => {
  const data = useContext(Mycontext);
  return (
    <div>
      Child component
      <h1>{data}</h1>
    </div>
  );
};

export default Child;
