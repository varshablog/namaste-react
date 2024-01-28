import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-regular-svg-icons";

import { CARDS_IMG } from "../utils/constant";

const Cards = (props) => {
  const { resData } = props;
  
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      className="cart"
      //testing purpose
      data-testid="resCards"
    >
      <img src={CARDS_IMG + cloudinaryImageId} alt="" />
      <h2 className="name">{name}</h2>
      <h2 className="cusins">{cuisines.join(" , ")}</h2>
      <div className="info">
        <h3 className="star">
          <FontAwesomeIcon icon={faStar} />
          {avgRating}
        </h3> 
        
        <h3>{sla.deliveryTime}MIN</h3>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  );
};
export default Cards;

export const withPromotedCards = (Cards) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <Cards />
      </div>
    );
  };
};
