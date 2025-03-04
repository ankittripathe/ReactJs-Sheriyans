import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Value of Num: {num} </h1>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment
      </button>

      <button onClick={() => setNum(num - 1)}>Decrement</button>
    </div>
  );
};

export default App;
