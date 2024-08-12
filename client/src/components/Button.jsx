import React from "react";

const Button = (props) => {
  console.log(`${props.name} rendered`);
  return (
    <div onClick={props.func} style={{ cursor: "pointer" }}>
      {props.name}
    </div>
  );
};

export default React.memo(Button);
