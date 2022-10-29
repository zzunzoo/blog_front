import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="z-10 sticky top-0 bg-gradient-to-br from-black to-[#121286] text-xl py-5 border-b-[1px]  border-gray-200 drop-shadow-sm text-white flex justify-between items-center px-5 sm:px-10 xl:px-20">
      <div className="">
        <span className="sm:text-2xl xl:text-3xl">준주의 낙서장</span>
      </div>
      <div className="flex space-x-5">
        <Link to="/" className="transition delay-75 hover:text-blue-500">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
        </Link>
        <Link
          to="/projects"
          className="transition delay-75 hover:text-blue-500"
        >
          <svg
            className="w-9 h-9"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
