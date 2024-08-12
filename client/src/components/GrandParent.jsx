// import React from 'react'
import { createContext } from "react";

import Parent1 from "./Parent1";
export const Mycontext = createContext();

const GrandParent = () => {
  const data = "hello world";
  return (
    <div>
      GrandParent component
      <h1>
        <Mycontext.Provider value={data}>
          <Parent1 />
        </Mycontext.Provider>
      </h1>
    </div>
  );
};

export default GrandParent;
