import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import ViewMoreButton from "../components/ViewMoreButton";

const CardContainer = () => {
  const accessToken = import.meta.env.VITE_APP_GIT_TOKEN;

  const [repositories, setRepositories] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);

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

  return (
    <div className="w-2/3 flex flex-col gap-y-6 mx-auto ">
      <SearchBar />
      <div className="grid grid-cols-3 gap-4">
        {repositories.slice(0, displayCount).map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
      <ViewMoreButton
        displayCount={displayCount}
        repositories={repositories}
        viewMore={handleViewMore}
      />
    </div>
  );
};

export default CardContainer;
