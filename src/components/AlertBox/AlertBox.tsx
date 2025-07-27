import React from 'react';
import  { type AlertBoxProps } from '../../types';


export default function AlertBox(props: AlertBoxProps){
  return (
    <div className='alert-Box'>
       <p> {props.type.toUpperCase()}: {props.message}</p>
       {props.onClose && <button onClick={props.onClose}> Close</button>}
        <p className="text-sm">You can now continue using the application.</p>

    </div>
  )
  }






    
    
