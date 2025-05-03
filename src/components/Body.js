import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  const [listOfRestros, setListOfRestros] = useState(restaurantList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestros(
              listOfRestros?.filter((res) => res.data.avgRatings > 3.9)
            );
          }}
        >
          Ratings 3.9+
        </button>
      </div>
      <div className="restro-container">
        {listOfRestros.map((restro) => (
          <RestaurantCard key={restro.data.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
