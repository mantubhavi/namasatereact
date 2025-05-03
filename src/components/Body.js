import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestros, setListOfRestros] = useState([]);

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
  };

  if (listOfRestros.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestros(
              listOfRestros?.filter((res) => res.info.avgRating > 4.1)
            );
          }}
        >
          Ratings 4.1 +
        </button>
      </div>
      <div className="restro-container">
        {listOfRestros.map((restro) => (
          <RestaurantCard key={restro.info.id} resData={restro.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
