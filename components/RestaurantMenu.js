import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClock,
  faMagnifyingGlass,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {  faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';

import RestaurantOffers from "./RestaurantOffers";
import MenuSection from "./MenuSection";

const RestaurantMenu = () => {
  const [checkBox, setCheckBox] = useState(false);

  const [showIndex, setShowIndex] = useState(null);

  function collapseData(){
    setShowIndex(null);
    
  }
  
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  //Destructuring
  if (resInfo == " ") return <Shimmer />;
  
  const RestaurantInfo = resInfo?.data?.cards[0]?.card?.card?.info;

  const restaurantOffers =
  resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const restaurantMenus =
  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  
  // console.log(restaurantMenus)
  
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    areaName,
    city,
  } = RestaurantInfo;
  const { lastMileTravelString, slaString } = RestaurantInfo?.sla;
  

  return (
    <div className="Menu">
      <div className="firstCon">
        <p>{"Home/" + city + "/" + name}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
      <div className="information">
        <div className="infoContainer">
          <div className="resinfo">
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>
              {areaName}, {lastMileTravelString}
            </h3>
          </div>
          <div className="ratings">
            <h3 className="ratingStar">
              {" "}
              <FontAwesomeIcon icon={faStar} /> {avgRating}
            </h3>
            <h3 className="totalRating">{totalRatingsString}</h3>
          </div>
        </div>
        <hr className="line" />
        <div className="timeCost">
          <ul className="timer">
            <li>
              <FontAwesomeIcon icon={faClock} /> <span>{slaString}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <span>{costForTwoMessage}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="offers">
        {restaurantOffers.map((offer) => (
          <RestaurantOffers key={offer.info.offerIds} offerData={offer} />
        ))}
      </div>
      <div className="vegCheckBox">
        <span>Veg Only</span>
        <div className="classify">
          <label>
            <input
              className="checkboxInput"
              onClick={() => {
                checkBox == false ? setCheckBox(true) : setCheckBox(false);
              }}
              type="checkbox"
            />
            <span>
              <i></i>
            </span>
          </label>
        </div>
      </div>

      <div className="restaurantMenus">
        {restaurantMenus.map((section, index) => (
      
          <MenuSection
          
          key={section?.card?.card?.title}
          MenuSectionData={section}
          CheckUncheck={checkBox}
          showItems={index== showIndex ? faAngleUp :faAngleDown }
          setShowIndex={()=> setShowIndex(index)}
          changingIndex={collapseData}
          
          />
          
       ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
