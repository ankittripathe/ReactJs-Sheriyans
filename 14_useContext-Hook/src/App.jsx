// context API is used to centralize the data
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import UserContext, { DataContext } from "./context/UserContext";
import { useContext } from "react";

const App = () => {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <h1>App Folder:- {data.username}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
