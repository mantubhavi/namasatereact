import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const respData = await response.json();
    setRestroInfo(respData.data);
  };

  if (restroInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restroInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h5>{costForTwoMessage}</h5>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
