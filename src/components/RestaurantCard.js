import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="Meghana Foods"
      />
      <h4 className="card-msg">{name}</h4>
      <h5 className="card-msg text-gray">{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;
