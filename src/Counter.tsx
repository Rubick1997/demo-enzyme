import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev+ 1);
  };

  return (
    <div >
     
    </div>
  );
}
export default Counter;
