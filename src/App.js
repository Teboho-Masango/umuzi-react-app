import React, { useState } from "react";
import Header from "./components/Header";
import CoffeeForm from "./components/CoffeeForm";
import CoffeeList from "./components/CoffeeList";
import "./App.css";

export default function App() {
  let [brews, setBrews] = useState([]);

  let handleAddBrew = (newBrew) => {
    setBrews([newBrew, ...brews]);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "sans-serif",
      }}
    >
      <Header />
      <CoffeeForm onAddBrew={handleAddBrew} />
      <CoffeeList brews={brews} />
    </div>
  );
}
