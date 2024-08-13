import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/mobiles").then((res) => setData(res.data));
    // console.log(data);
  });
  return (
    <div>
      {data.map((item, index) => (
        <li key={index}>
          {item.brandName} - {item.modelName}
        </li>
      ))}
    </div>
  );
};

export default Data;
