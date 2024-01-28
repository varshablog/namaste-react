import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import MenuDetail from "./MenuDetail";
import CategorySection from "./CategorySection";
import TopData from "./TopData";

import { useState } from "react";
import { filter } from "../utils/functions";

const MenuSection = (props) => {
  // const [upDownList,setUpDownList]=useState();
  const { MenuSectionData, showItems, setShowIndex, changingIndex } = props;

  const data = (showItems.iconName = "faAnglehd");
  console.log(data);
  const checks = props.CheckUncheck;

  //  const setUp=()=>{
  //     showItems==faAngleUp ? showItems=faAngleDown: setShowIndex()
  //  }

  const { title, itemCards, categories, carousel } = MenuSectionData.card.card;
  const filterdata = itemCards;

  let vegData;
  if (filterdata != undefined) {
    vegData = filter(filterdata);
    //   filterdata.filter(

    //     (vegCard) => vegCard.card.info.itemAttribute!=undefined ?vegCard.card.info.itemAttribute.vegClassifier=="VEG":vegCard.card.info.isVeg==1

    //     );
  }

  if (title && itemCards) {
    return (
      <div className="sectionMenu">
        {checks == true && vegData == "" ? (
          ""
        ) : (
          <div
            className="category"
            onClick={() => {
              //  menuIcon==faAngleDown? setMenuIcon(faAngleUp):setMenuIcon(faAngleDown)

              showItems == faAngleDown ? setShowIndex() : changingIndex();
            }}
          >
            <h1>
              {title} ({itemCards.length})
            </h1>
            <h3 className="downLogo">
              <FontAwesomeIcon icon={showItems} />{" "}
            </h3>
          </div>
        )}
        {showItems == faAngleUp ? (
          <div className="resMenu">
            {checks == false
              ? itemCards.map((Menu) => (
                  <MenuDetail
                 
                    key={Menu.card.info.id}
                    MenuInfo={Menu}
                  />
                ))
              : vegData.map((Menu) => (
                  <MenuDetail
                    
                    key={Menu.card.info.id}
                    MenuInfo={Menu}
                  />
                ))}
          </div>
        ) : (
          " "
        )}
      </div>
    );
  } else if (title && categories) {
    return (
      <div>
        <div className="category">
          <h1>{title}</h1>
          {/* <h3 className="downLogo"> <FontAwesomeIcon icon={faAngleDown } /> </h3> */}
        </div>
        <div className="resMenu">
          {categories.map((Menu, index) => (
            <CategorySection
              key={Menu.title}
              sectionInfo={Menu}
              CheckUncheck={checks}
            />
          ))}
        </div>
      </div>
    );
  } else if (title && carousel) {
    return (
      <div className="topPicks">
        <h1>{title}</h1>
        <div className="img-list">
          {carousel.map(
            (card, index) => (
              console.log("inside top"), (<TopData key={index} data={card} />)
            )
          )}
        </div>
      </div>
    );
  }
};
export default MenuSection;
