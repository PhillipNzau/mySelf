import React, { useState } from "react";

const SearchBar = ({ isColumn, onClick, onChange, searchQuery }) => {
  return (
    <div className="flex items-center gap-x-2 ">
      <div className="transition-all duration-300 hover:border-slate-100 hover:cursor-pointer border w-full border-slate-500 rounded-md relative flex items-center gap-x-2 px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          className="outline-none bg-transparent w-full"
          type="search"
          value={searchQuery}
          onChange={onChange}
          id="search"
          placeholder="Search..."
        />
      </div>

      {/* Change orientation */}
      <div className="flex items-center gap-x-2 w-min border border-slate-500 p-[4px] rounded-md hover:cursor-pointer">
        {/* Row */}
        <div
          onClick={() => {
            onClick(false);
          }}
          className={`hover:bg-gray-600 rounded-md p-1 ${
            !isColumn ? "bg-gray-600" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
        </div>

        {/* Column */}
        <div
          onClick={() => {
            onClick(true);
          }}
          className={`hover:bg-gray-600 rounded-md p-1 ${
            isColumn ? "bg-gray-600" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
