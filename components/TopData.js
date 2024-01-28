 import { TOP_PICKS_IMG } from "../utils/constant";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
console.log("fkj")
const TopData=(props)=>{
    
  const{data}=props;
  const{creativeId}=data;
  const{addons,category,itemAttribute,price,name}=data.dish.info;
    return(
      <div className="bestData">
        <div className="topPickslists">
            <img src={TOP_PICKS_IMG+creativeId} alt="" />
            <div className="Topcard-data">
                <span className="rupeeSign"><FontAwesomeIcon className="rupeeLogo"icon={faIndianRupeeSign}/>{price/100}</span>
                <div className="TopPicksButton">
                  <button>ADD</button>
                  {
                    console.log(addons)
                  }
                {  
                addons!=undefined &&
                   <p className="custom">Customisable</p>
                }
                </div>
            </div>
        </div>
      </div>

    )
}
export default TopData;