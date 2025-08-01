import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants/constants";

const useRestraunt = () => {
  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredListOfRestro, setFilteredListOfRestro] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(BASE_URL);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestros(restaurants);
      setFilteredListOfRestro(restaurants);
    };

    fetchData();
  }, []);

  return { listOfRestros, filteredListOfRestro, setFilteredListOfRestro };
};

export default useRestraunt;
