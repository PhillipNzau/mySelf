import React, { useState } from "react";

const Header = ({ onToggle, isMenuOpen }) => {
  return (
    <>
      <div className="h-max flex items-center justify-between w-full md:w-2/3 mx-auto">
        <div className="flex items-center gap-x-4 ">
          <div className="w-12 rounded-full">
            <img
              className="object-contain rounded-full w-full h-full"
              src="/phillip.webp"
            />
          </div>
          <p className="font-bold text-xl text-white font-heading">
            Phillip Nzau
          </p>
        </div>

        <div className="hidden md:flex items-center gap-x-4">
          <p className="text-gray-500 text-sm hover:text-white hover:cursor-pointer transition duration-300">
            Work
          </p>
          <p className="text-gray-500 text-sm hover:text-white hover:cursor-pointer transition duration-300">
            About
          </p>
          <p className="text-gray-500 text-sm hover:text-white hover:cursor-pointer transition duration-300">
            Contact
          </p>
          <p className="text-gray-500 text-sm hover:text-white hover:cursor-pointer transition duration-300">
            Github
          </p>
        </div>

        {/* Menu button */}

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 block md:hidden hover:cursor-pointer ${
              isMenuOpen ? "hidden" : "block"
            }`}
            onClick={onToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 block md:hidden hover:cursor-pointer ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={onToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div
        className={`h-screen text-center font-heading text-3xl py-20 flex flex-col gap-y-14 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-300">
          Work
        </p>
        <p className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-300">
          About
        </p>
        <p className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-300">
          Contact
        </p>
        <p className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-300">
          Github
        </p>
      </div>
    </>
  );
};

export default Header;
