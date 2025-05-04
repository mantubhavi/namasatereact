import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredListOfRestro, setFilteredListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BASE_URL);
    const jsonConvertedData = await data.json();
    setListOfRestros(
      jsonConvertedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestro(
      jsonConvertedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestros.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const fileteredRestro = listOfRestros.filter((restro) =>
                restro?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredListOfRestro(fileteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredListOfRestro(
              filteredListOfRestro?.filter((res) => res?.info?.avgRating > 4.1)
            );
          }}
        >
          Ratings 4.1 +
        </button>
      </div>
      <div className="restro-container">
        {filteredListOfRestro?.map((restro) => (
          <RestaurantCard key={restro.info.id} resData={restro.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
