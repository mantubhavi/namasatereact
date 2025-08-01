import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants/constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${MENU_API}${resId}`);
      const jsonConvertedData = await data.json();
      setResInfo(jsonConvertedData.data);
    };

    fetchData();
  }, []);

  return resInfo;
};

export default useRestrauntMenu;
