import React from "react";

const ViewMoreButton = ({ repositories, displayCount, viewMore }) => {
  return (
    <button
      className="w-full border  border-slate-500 bg-transparent text-slate-200 rounded-md py-3 font-bold transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black "
      hidden={repositories.length <= displayCount}
      onClick={viewMore}
    >
      View More
    </button>
  );
};
export default ViewMoreButton;
