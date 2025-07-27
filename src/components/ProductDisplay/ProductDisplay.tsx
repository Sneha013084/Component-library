
import React from 'react';
import { type  ProductDisplayProps } from '../../types';

export default function ProductDisplayCard (props:ProductDisplayProps){

    return(
     <div>
       <p> {props.product.name}</p>
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
    
     </div>
     
    )
  }