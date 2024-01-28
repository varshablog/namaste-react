import Cards, { withPromotedCards } from "./Cards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { updateData } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { withPromotedCards } from "./Cards";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [resOfList, setListOfList] = useState([]);
  const [listOfFilter, setListOfFilter] = useState([]);
  let [searchText, setsearchText] = useState([]);
  const withLabledCards = withPromotedCards(Cards);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

   

    //Optional chaining
    const cardsData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
  
    setListOfList(cardsData);
    setListOfFilter(cardsData);
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <div>
        <h1>Your internet is lost</h1>
      </div>
    );
  }

  //Conditional Rendering
  if (resOfList?.length == 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          
          onClick={() => {
            const filteredList = resOfList.filter(
              (res) => res?.info?.avgRating > 4
            );

            setListOfFilter(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="search">
          <input
            type="text"
            //testing purpose
            // data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value.toLowerCase());
            }}
          />

          <button
            onClick={() => {
              const searchRestaurant = resOfList.filter((restaurants) =>
                restaurants.info.name.toLowerCase().includes(searchText)
              );

              console.log(searchRestaurant);
              setListOfFilter(searchRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div class="input-text">
          <label htmlFor="">UserName:</label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="container">
        {listOfFilter?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <Cards resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
