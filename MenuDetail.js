import { useState } from "react";
import { NONVEG_LOGO } from "../utils/constant";
import { VEG_LOGO } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { MENU_IMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const MenuDetail = (props) => {
  const { MenuInfo } = props;

  const {
    name,
    addons,
    description,
    itemAttribute,
    price,
    defaultPrice,
    imageId,
    isBestseller,
    isVeg,
  } = MenuInfo?.card?.info;

  const [bestSeller] = useState(isBestseller);

  const dispatch = useDispatch();

  const handleAddItem = (MenuInfo) => {
    dispatch(addItems(MenuInfo));
  };

  return (
    <div className="MenuDetails"  data-testid="foodItems">
      <div className="menuInformation">
        <div className="bestCategory">
          <div className="vegNonVeg">
            {itemAttribute != undefined ? (
              itemAttribute.vegClassifier === "VEG" ? (
                <img className="vegImg" src={VEG_LOGO} alt="" />
              ) : (
                <img className="nonVegImg" src={NONVEG_LOGO} alt="" />
              )
            ) : isVeg == 1 ? (
              <img className="vegImg" src={VEG_LOGO} alt="" />
            ) : (
              <img className="nonVegImg" src={NONVEG_LOGO} alt="" />
            )}
          </div>
          <div className="bestSeller">
            {bestSeller == true ? (
              <h1>
                <FontAwesomeIcon icon={faStar} />
                Bestseller
              </h1>
            ) : (
              ""
            )}
          </div>
        </div>
        <h4>{name}</h4>
        <p className="rupeeSign">
          <FontAwesomeIcon className="rupeeLogo" icon={faIndianRupeeSign} />
          {price / 100 || defaultPrice / 100}
        </p>
        <p className="description">{description}</p>
      </div>
      <div className="menuImg">
        {imageId != undefined && <img src={MENU_IMG + imageId} alt="" />}
        <div className="buttonDiv">
          <button onClick={() => handleAddItem(MenuInfo)}>ADD</button>
        </div>
        <span>{addons != undefined && <p>Customisable</p>}</span>
      </div>
    </div>
  );
};
export default MenuDetail;
