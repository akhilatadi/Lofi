import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from './Payment'

const PUBLIC_KEY= "pk_test_51KCSFhCFS08r1QCqI8GuVAwmwpH2y1w2Ar0n3bRvwiMbUACWcRkxwOmBfEwQGowq6JYq8l2ouK0gSbIeQB16G05d00SYMQZsCI"

const stripeTestPromise= loadStripe(PUBLIC_KEY)

function StripeContainer() {
  return (
  <Elements stripe={stripeTestPromise}>
      <Payment/>
  </Elements>
  )
}

export default StripeContainer