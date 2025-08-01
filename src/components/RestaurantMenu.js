import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntMenu from "../hooks/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restroInfo = useRestrauntMenu(resId);

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
