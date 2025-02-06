/* Notes:-
  hooks:- hooks are special type of function
  useState hook :- state management
*/

import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);   

  const changeMe = () => {
    console.log("change ho gaya");  // output in console
    // setNum('Happy New Year') // can assign string as well
    setNum(20);
  };

  return (
    <div>
      <h1>Value of Num: {num}</h1>
      <button onClick={changeMe}>Change num</button>
    </div>
  );
};

export default App;
