import { useState } from "react";
import "./App.css";
import { NarBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <NarBar />
        <div className="App flex-grow">
          <h1>Code</h1>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
