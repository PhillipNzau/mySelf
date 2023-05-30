import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const CardContainer = () => {
  const [repositories, setRepositories] = useState([]);
  const accessToken =
    "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";

  // Fetch function
  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/user/repos?affiliation=owner",
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
      console.log("repos", repositories);
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
        {repositories.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
