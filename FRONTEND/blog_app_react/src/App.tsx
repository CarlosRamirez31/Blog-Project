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
              <div className="flex justify-center">
                <div className="w-1/4 p-4">
                  {/* Componente Izquierdo */}
                  <div className="bg-gray-200 h-screen">
                    Componente Izquierdo
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  {/* Componente Principal */}
                  <div className="bg-gray-300 h-screen">
                    Componente Principal
                  </div>
                </div>
                <div className="w-1/4 p-4">
                  {/* Componente Derecho */}
                  <div className="bg-gray-200 h-screen">Componente Derecho</div>
                </div>
              </div>
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
