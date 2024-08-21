import React from "react"; 
import "./css/BasketPromoInfo.css"; 
 
import ItemPrice from './ItemPrice' 
 
const BasketPromoInfo = ({ code }) => { 
  return ( 
    <div className="BasketPromoInfo"> 
      <div className='BasketPromoInfo_main'> 
        <h3 className="BasketPromoInfo_title">Промокод</h3> 
        <p className="BasketPromoInfo_description">{code}</p> 
      </div> 
      <div className='BasketPromoInfo_price'> 
        <ItemPrice value={-500} currency={'₽'} /> 
      </div> 
    </div> 
  ); 
}; 
 
export default BasketPromoInfo;