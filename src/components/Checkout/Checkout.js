import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import StripeContainer from '../../components/StripeContainer';
import "./Checkout.css" 

function Checkout() {

  
  return (
    <div className="checkout">
        <StripeContainer/>
    </div>
  )
}

export default Checkout