import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import ViewMoreButton from "../components/ViewMoreButton";

const CardContainer = () => {
  const accessToken = import.meta.env.VITE_APP_GIT_TOKEN;

  const [repositories, setRepositories] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [isColumn, setIsColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewMore = () => {
    setDisplayCount(displayCount + 6);
  };

  // Fetch function
  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/user/repos?affiliation=owner&sort=updated",
        {
          headers: {
            Authorization: `token ${accessToken}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error(error);
    }
  };
  // UseEffect
  useEffect(() => {
    fetchRepositories();
  }, []);

  //   handle setIs Column
  const handleSetIsColumn = (state) => {
    setIsColumn(state);
  };

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Actual filter
  const filteredData = repositories.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:w-2/3 flex flex-col gap-y-6 mx-auto w-full ">
      <SearchBar
        isColumn={isColumn}
        onClick={handleSetIsColumn}
        onChange={handleSearch}
        searchQuery={searchQuery}
      />
      <div
        className={`grid gap-4 ${
          isColumn ? "grid-cols-1" : " md:grid-cols-3 grid-cols-1 "
        }`}
      >
        {filteredData.slice(0, displayCount).map((repo) => (
          <Card key={repo.id} repo={repo} isColumn={isColumn} />
        ))}
      </div>
      <ViewMoreButton
        displayCount={displayCount}
        repositories={filteredData}
        viewMore={handleViewMore}
      />
    </div>
  );
};

export default CardContainer;
