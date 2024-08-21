import React from 'react'
import "./css/BasketItem.css" 
 
import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter' 
 
const BasketItem = ({ 
  uid, 
  title, 
  description, 
  price, 
  qty, 
  setItems, 
  items
}) => { 
   
  return ( 
    <div className='BasketItem'> 
      <ItemInfo title={title} description={description} /> 
      <ItemPrice value={price} currency={'₽'} /> 
      <Counter value={qty} uid={uid} items={items} setItems={setItems} /> 
      <ItemPrice value={qty * price} currency={'₽'}  />
    </div> 
  ) 
} 
 
export default BasketItem