import "./App.css";
import { NarBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
