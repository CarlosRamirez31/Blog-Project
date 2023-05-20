import { useState } from "react";
import "./App.css";
import { NarBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { SideBar } from "./Components/Sidebar/Sidebar";
import './index.css'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NarBar />
        <SideBar />
        <main>
          <div className="App flex-grow"></div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
