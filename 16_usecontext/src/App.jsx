import React from "react";
import { useState, createContext } from "react";
import ChildA from "./components/ChildA";

// Step:1 Create userContext
// Step:2 Wrap Child component inside context provider
// step:3 Export userContext
// Step:4 To use call useContext(xyzProvide) in child Components
const UserContext = createContext();

const App = () => {
  const [userDetails, setUser] = useState({
    username: "Maahi",
    age: 44,
    city: "Ranchi",
  });

  return (
    <>
      <UserContext.Provider value={userDetails}>
        <div
          style={{
            backgroundColor: "crimson",
            padding: "20px",
            marginBlock: "10px",
            borderRadius: "10px",
          }}
        >
          <h1>User:- {userDetails.username}</h1>
          <h2>City:- {userDetails.city}</h2>
          <h2>Age:- {userDetails.age}</h2>
        </div>

        <ChildA />
      </UserContext.Provider>
    </>
  );
};

export default App;
export { UserContext };
