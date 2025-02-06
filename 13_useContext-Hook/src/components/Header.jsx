import React from "react";
import UserContext, { DataContext } from "../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const user = useContext(DataContext);
  return (
    <div>
      <h1>Header City:- {user.city}</h1>
    </div>
  );
};

export default Header;
