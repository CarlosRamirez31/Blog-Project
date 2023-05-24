import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { useState } from "react";
import { SideBar } from "../Sidebar/Sidebar";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { UserComponent } from "./UserComponent";
import { NavBarButton } from "./NavBarButtons";

export const NarBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <header className="flex justify-between items-center bg-gray-900 text-white px-4 py-3">
              <HamburgerButton isOpen={isMenuOpen} toggleButton={toggleMenu} />
              <nav
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:block md:flex-grow md:items-center md:w-auto`}
              ></nav>
            </header>
          </div>
          <a href="" className="flex items-center">
            <span className="text-4x1">
              <AiOutlineAppstoreAdd className="h-8 mr-3" />
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BLOG APP
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NavBarButton.map((button) => {
                return (
                  <>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                      >
                        {button.title}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center md:order-2">
            <UserComponent />
          </div>
        </div>
      </nav>
      {isMenuOpen && <SideBar />}
    </>
  );
};
