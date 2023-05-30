import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const CardContainer = () => {
  return (
    <div className="w-2/3 flex flex-col gap-y-6 mx-auto ">
      <SearchBar />
      <Card />
    </div>
  );
};

export default CardContainer;
