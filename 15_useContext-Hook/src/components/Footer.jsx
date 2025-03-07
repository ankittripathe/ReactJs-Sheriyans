import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Footer = () => {
  const naam = useContext(DataContext);
  return (
    <div>
      <h2>Footer section:- {naam.age}</h2>
    </div>
  );
};

export default Footer;
