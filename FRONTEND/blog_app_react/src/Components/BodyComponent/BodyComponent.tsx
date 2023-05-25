import { MainComponent } from "../../MainComponent/MainComponent";

export const BodyComponent = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/4 p-4">
          {/* Componente Izquierdo */}
          <div className="bg-gray-200 h-screen">Componente Izquierdo</div>
        </div>
        <div className="w-1/2 p-4">
          {/* Componente Principal */}
          <div className="bg-gray-300 h-screen">
            Componente Principal
            <MainComponent />
          </div>
        </div>
        <div className="w-1/4 p-4">
          {/* Componente Derecho */}
          <div className="bg-gray-200 h-screen">Componente Derecho</div>
        </div>
      </div>
    </>
  );
};
