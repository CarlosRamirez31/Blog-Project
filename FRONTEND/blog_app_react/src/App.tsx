import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NarBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NarBar />
      <div className="App">
        <h1>Code</h1>
      </div>
    </>
  );
}

export default App;
