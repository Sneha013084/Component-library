
import React from 'react';
import { type  ProductDisplayProps } from '../../types';

export default function ProductDisplayCard (props:ProductDisplayProps){

  return(
     <div>
      {props .product .imageUrl &&(
        <img 
        src ={props .product .imageUrl}
        alt = {`${props .product .name}`}
        style={{width:'100px', borderRadius:'50%'}} />
      )}
       <p> {props.product.name}</p>
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
    
     </div>
     
    )
  }