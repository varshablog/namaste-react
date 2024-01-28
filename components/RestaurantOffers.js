import { OFFER_LOGO } from "../utils/constant";
const RestaurantOffers=(props)=>{
    const {offerData}=props;
    const {couponCode,description,header,offerLogo}=offerData.info;
    return(
        <div className="offer">
            <div className="offerName">
                <img src={OFFER_LOGO+offerLogo} alt="" />
                <h3>{header}</h3>
            </div>
            <div className="offerInfo">
                <h3>{couponCode}</h3>
                <h3 className="desc">{description}</h3>
            </div>

        </div>
    )
}
export default RestaurantOffers;