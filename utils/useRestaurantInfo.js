import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";
const useRestaurantInfo=(resId)=>{
    const [resInfo,setResInfo]=useState(" ");
    useEffect(()=>{
        fetchMenu();
      },[]);
  
      const fetchMenu= async () => {
          const data=await fetch(RESTAURANT_MENU + resId);
          const json=await data.json();
          console.log(json);
          setResInfo(json);
  
    }

    return resInfo;
}
export default useRestaurantInfo;