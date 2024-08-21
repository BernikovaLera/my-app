import React from 'react'
import "./css/BasketPromoCode.css"; 
 
import Button from './Button' 
 
const BasketPromoCode = () => { 
  return ( 
    <div className='BasketPromoCode'> 
       <input        
       className='BasketPromoCode_input' 
       placeholder='Промокод' 
        /> 
      <Button value='Применить' onClickHandler={() => alert('Применить')} /> 
    </div> 
  ) 
} 
 
export default BasketPromoCode