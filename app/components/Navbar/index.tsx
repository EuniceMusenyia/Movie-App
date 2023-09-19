'use client'
import React, { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        console.log("Search value", searchValue);
      onSearch(searchValue);
    }
  };

  return (
    <nav className="bg-black py-4 fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            M<span className="text-yellow-400">oo</span>vie
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleInput}
              onKeyPress={handleKeyPress}
              placeholder="Search"
              className="px-20 py-1 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-300"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4 text-white">
            <li className="text-yellow-400 underline text-lg">Home</li>
            <li className="text-white text-lg">My list</li>
          </ul>
          <button className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:bg-yellow-300 text-lg">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
