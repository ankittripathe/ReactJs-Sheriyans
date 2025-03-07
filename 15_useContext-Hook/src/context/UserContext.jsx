import React from "react";
import { createContext } from "react";

const DataContext = createContext();

const UserContext = (props) => {
  const userData = {
    username: "Ankit Tripathi",
    age: 25,
    city: "Gorakhpur",
  };

  return (
    <div>
      <DataContext.Provider value={userData}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
export { DataContext };
