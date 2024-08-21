import React from "react"; 
import "./css/BasketTotal.css"; 
 
import ItemPrice from "./ItemPrice"; 
 
const BasketTotal = (props) => { 
  const { value, currency } = props; 
 
  return ( 
    <div className="BasketTotal"> 
      <div className="BasketTotal_main"> 
        <h3 className="BasketTotal_title">Всего</h3> 
        <p className="BasketTotaldescription">(РУБ)</p> 
      </div> 
      <div className="BasketTotal_price"> 
        <ItemPrice value={value} currency={currency} /> 
      </div> 
    </div> 
  ); 
}; 
 
export default BasketTotal;