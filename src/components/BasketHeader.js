import React from 'react'; 
import './css/BasketHeader.css'; 
 
const BasketHeader = (props) => { 
  return ( 
    <div className='BasketHeader'> 
      <h2 className='BasketHeader_h2'>Ваша корзина</h2> 
      <span className='BasketHeader_count'>{props.count}</span> 
    </div> 
  ); 
}; 
 
export default BasketHeader;