import React from 'react'
import "./css/ItemInfo.css" 
 
const ItemInfo = ({title, description}) => { 
  return ( 
    <div className='ItemInfo'>
      <h3 className='ItemInfo_title'>{title}</h3> 
      <p className='ItemInfo_description'>{description}</p> 
    </div> 
  ) 
} 
 
export default ItemInfo