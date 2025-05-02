import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatings,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="Meghana Foods"
      />
      <h4>{name}</h4>
      <h5 className="card-title">{cuisines.join(", ")}</h5>
      <h5>{avgRatings} stars</h5>
      <h5>
        &#8377;
        {costForTwo / 100} For Two
      </h5>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;
