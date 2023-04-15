import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}


// PROPS DEL SIDEBAR => { isOpen, toggleSidebar }: SidebarProps

export const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative flex flex-col flex-grow">
      <div className="bg-gray-800 text-gray-100 flex justify-between items-center px-4 py-2">
        <div className="text-lg font-bold">Mi aplicación</div>
        <button
          className="focus:outline-none lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 absolute inset-y-0 left-0 z-20 transition transform duration-200 ease-in-out bg-gray-900 w-64 px-8 pt-4 pb-16`}
      >
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-4">Contenido principal</div>
    </div>
  );
}