import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restaurantList?.map((restro) => (
          <RestaurantCard key={restro.data.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
