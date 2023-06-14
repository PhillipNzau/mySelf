import React from "react";

const Header = () => {
  return (
    <div className="h-max flex items-center justify-between w-full  md:w-2/3 mx-auto">
      <div className="flex items-center gap-x-4 ">
        <div className="w-12 rounded-full">
          <img
            className="object-contain rounded-full w-full h-full"
            src="/phillip.webp"
          />
        </div>
        <p className="font-bold text-xl text-white">Phillip Nzau</p>
      </div>

      <div className="flex items-center gap-x-4">
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
    </div>
  );
};

export default Header;
