import React from "react";
import ChildC from "./ChildC";

const ChildB = () => {
  return (
    <>
      <div>
        <h1>Child B</h1>
      </div>
      <ChildC />
    </>
  );
};

export default ChildB;
