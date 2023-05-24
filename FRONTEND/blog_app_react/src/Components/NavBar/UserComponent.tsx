import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";

export const UserComponent = () => {
  return (
    <>
      <div className="dropdown relative inline-block">
        <button
          type="button"
          className="dropdown-btn hover:bg-blue-600 flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
        >
          <span className="sr-only">Open user menu</span>
          <span className="text-3xl">
            <BiUserCircle />
          </span>
        </button>
      </div>
    </>
  );
};
