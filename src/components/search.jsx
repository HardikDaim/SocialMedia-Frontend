import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Search({userId}) {
  const token = useSelector((state) => state.token);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (searchQuery.trim() === "") {
        // Handle empty query
        setSearchResults([]);
        return;
      }

      const response = await fetch(
        `http://localhost:4000/users/search/${searchQuery}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  

  const handleProfileClick = (_id) => {
    // navigate(`/profile/${_id}`);
  };
  

  useEffect(() => {
    handleSearch(); // Initial search when the component mounts
  }, [searchQuery]); // Trigger the search when searchQuery changes

  return (
    <div>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          onClick={handleSearch}
          className="block w-full p-3 pl-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for people, reels....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
      </div>
      {/* Display search results */}
      <div>
        <ul className="font-medium border border-gray-300 dark:border-gray-700 divide-y-2">
          {searchResults.map((user) => (
            <li
              key={user.userId}
              onClick={() => handleProfileClick(user.userId)}
              className="cursor-pointer flex items-center p-2 text-gray-900  rounded-lg dark:tex-white hover:bg-gray-100 dark:bg-gray-700"
            >
              {user.picturePath && (
                <img
                  src={user.picturePath}
                  className="rounded-full h-8 w-8 mr-2"
                />
              )}
              <p className="">{`${user.firstName} ${user.lastName}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
