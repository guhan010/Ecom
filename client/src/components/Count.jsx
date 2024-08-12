import React from "react";

const Count = (props) => {
  console.log(`${props.name} rendered`);
  return (
    <div>
      {props.name} - {props.valu}
    </div>
  );
};

export default React.memo(Count);
