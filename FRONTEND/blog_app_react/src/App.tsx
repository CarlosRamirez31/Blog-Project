import { useState } from "react";
import "./App.css";
import { NarBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { SideBar } from "./Components/Sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container2">
          <NarBar />
          <div className="content">
            <main>
              <div className="App flex-grow"></div>
            </main>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
