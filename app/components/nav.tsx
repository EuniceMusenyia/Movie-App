import React, { useState } from "react";
import NavBar from "./Navbar";

const Nav = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchValue) => {
    const results = [
      "Result 1 for " + searchValue,
      "Result 2 for " + searchValue,
      "Result 3 for " + searchValue,
    ];
    setSearchResults(results);
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />

      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

