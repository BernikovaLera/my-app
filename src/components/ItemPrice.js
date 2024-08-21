import React from 'react'
import "./css/ItemPrice.css" 
 
const ItemPrice = ({value, currency}) => { 
  return ( 
    <div className='ItemPrice'>{value}{currency}</div> 
  ) 
} 
 
export default ItemPrice