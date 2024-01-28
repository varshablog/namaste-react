import { useState } from "react";
import { filter } from "../utils/functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';

import MenuDetail from "./MenuDetail";
const CategorySection=(props)=>{
    const {CheckUncheck}=props;
    
    const [sectionIcon,setSectionIcon]=useState(faAngleDown);
    const{sectionInfo}=props
    const{title,itemCards}=sectionInfo;
    const filterCategory=itemCards;
    let vegCategory;
    console.log(filterCategory);
        if(filterCategory!=undefined){
           vegCategory=filter(filterCategory);
        //    filterCategory.filter(
               
        //        (vegCard) => vegCard.card.info.itemAttribute!=undefined ?vegCard.card.info.itemAttribute.vegClassifier=="VEG":vegCard.card.info.isVeg==1
               
        //     );
        }
    
    
    return(
        <div className="sectionMenu">{
            CheckUncheck==true && vegCategory==""?"" :
             <div className="category"onClick={()=>{
                 sectionIcon==faAngleDown? setSectionIcon(faAngleUp):setSectionIcon(faAngleDown)
            }}>
            <h2 className="titleCategory">{title}</h2>
            <h3 className="downLogo"><FontAwesomeIcon icon={sectionIcon} /> </h3>
        </div>
        }
       {
        sectionIcon==faAngleUp ?
         <div className="resMenu">
           
       
            {
                CheckUncheck==false?
                itemCards.map(
                
                    (Menu,index)=>(
                       <MenuDetail key={index}  MenuInfo={Menu}/>
                    )
                ):vegCategory.map(
                
                    (Menu,index)=>(
                       <MenuDetail key={index}  MenuInfo={Menu}/>
                    )
                )
            }
         </div>:" "
       }      
    </div>
    
    )
}
export default CategorySection