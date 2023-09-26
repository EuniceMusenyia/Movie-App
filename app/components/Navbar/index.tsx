import React, { useState } from "react";
import { getSearch } from "@/app/utilities/getSearch";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const results = await getSearch(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
  return (
    <div className="navbar-lg py-8 bg-black">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="movie text-4xl text-white ml-10">
                M<span className="text-yellow-500">oo</span>vie
              </h1>
            </div>
            <div className="flex items-center">
              <input
                className="search px-20 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-100"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="bg-yellow-400 text-black px-6 py-1 rounded-full hover:bg-yellow-400 focus:outline-none focus:ring focus:bg text-lg"
                onClick={handleSearch}
                type="button"
              >
                Search
              </button>
            </div>
            <div className="flex items-center">
              <ul className="navbar-nav flex items-center gap-8 ml-10">
                {/* Your existing nav items */}
                <li className="nav-item">
                  <a className="nav-link text-white text-2xl" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-2xl" href="#">
                    My List
                  </a>
                </li>
                <li className="nav-item">
                  <button className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:bg text-lg mr-20">
                    <a className="nav-link active text-black text-lg" href="/sign Up">
                      Sign Up
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

// import React, { useState } from "react";

// const NavBar = ({ onSearch }) => {
//   const [searchValue, setSearchValue] = useState("");

//   const handleInput = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       onSearch(searchValue);
//     }
//   };

//   return (
//     <nav className="bg-black py-4 fixed w-full top-0">
//       <div className="container mx-auto flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-white">
//             M<span className="text-yellow-400">oo</span>vie
//           </h1>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               value={searchValue}
//               onChange={handleInput}
//               onKeyPress={handleKeyPress}
//               placeholder="Search"
//               className="px-20 py-2 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-300"
//             />
//             <button
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent focus:outline-none"
//               onClick={() => onSearch(searchValue)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M20 20L15 15"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center space-x-12">
//           <ul className="flex items-center space-x-4 text-white">
//             <li className="text-yellow-400 underline text-2xl">Home</li>
//             <li className="text-white text-lg">My List</li>
//           </ul>
//           <button className="bg-yellow-400 text-white px-8 py-2 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring focus:bg-yellow-300 text-lg">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
