import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestraunt from "../hooks/useRestraunt";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfRestros, filteredListOfRestro, setFilteredListOfRestro } =
    useRestraunt();

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline.</h1>;
  }

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
          <Link to={`/restaurants/${restro.info.id}`} key={restro.info.id}>
            <RestaurantCard resData={restro.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
