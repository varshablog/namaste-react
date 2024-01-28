export const filter=(filterdata)=>{
     
    let filterData=filterdata.filter(
         
        (vegCard) => vegCard.card.info.itemAttribute!=undefined ?vegCard.card.info.itemAttribute.vegClassifier=="VEG":vegCard.card.info.isVeg==1
           
    );
    return filterData;
}
