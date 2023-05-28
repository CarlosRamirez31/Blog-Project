import { MainComponent } from "../../MainComponent/MainComponent";
import TweetsComponent from "./Center/TweetsComponent";
import "./BodyStyles.css"
import NavbarLeftSide from "./NavbarLeftSide/NabBarLeftSide.jsx"

export const BodyComponent = () => {
  return (
    <>
      <div className="principal flex justify-center">
        <div className="w-1/4 p-4">
          {/* Componente Izquierdo */}
          <div className="h-full">
            <NavbarLeftSide />
          </div>
        </div>
        <div className="w-1/2 p-4">
          {/* Componente Principal */}
          <div className="h-full">
            {/* Componente Principal */}
            {/* <MainComponent /> */}
            <TweetsComponent />
          </div>
        </div>
        <div className="w-1/4 p-4">
          {/* Componente Derecho */}
          <div className="bg-gray-200 h-full">Componente Derecho</div>
        </div>
      </div>
    </>
  );
};
