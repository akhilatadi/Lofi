import React, { useState } from "react";
import "./Cart.css";
import {useNavigate} from "react-router-dom";
import stripe from "../../images/stripe.png"

function Cart({ onRemove, onAdd, cart,setCart, removefromCart,isAuth}) {
  let navigate= useNavigate();
  const toCheckout=()=>{
    navigate("/checkout");
  }

  const toSignin=()=>{
    navigate("/signin");
  }
  const toWorks=()=>{
    navigate("/works");
  }


  const itemPrice = cart.reduce((a, c) => 
a + c.qty * c.price, 0);

  const taxPrice = itemPrice * 0.14;
  const shipping = itemPrice > 50 ? 0 : 6;
  const totalPrice = itemPrice + taxPrice + shipping;

 

  return (
    <div className="cart_cont">
      <div className="cart_wrapper">
        <div className="cart_title">
        

          <h1>Shopping Cart:({cart.length})</h1>
        </div>

       {isAuth &&(<div className="cart_total">
          <p> Subtotal( items):${itemPrice} </p>
          <p>
            <input className="checkbox" type="checkbox" /> This order contains
            gift
          </p>
          <button onClick={()=>toCheckout()}> Proceed to Pay</button>
        </div>)} 
        {!isAuth && (<div className="checkoutbtn">
         <button onClick={()=>toSignin()}> Sign In to checkout</button>
        </div>)}
      </div>
      <div className="checkout_wrapper">
        {cart.length === 0 ? (
          <>
          <div className="product_cont">Your cart looks empty. Let's go fetch something!</div>
       <button onClick={()=>toWorks()}>continue Shopping</button>
       </>
        ) : (
          <div className="product_cont">
      
            {cart.map((product, id) => (
              <>
                <div className="product_wrapper" key={id}>
                <img src={product.img} />
                  <div className="content_wrapper">

                  <h3>{product.title}</h3>

                  <h3 >${product.price.toFixed(2)}</h3>
                 <div className="btn_wrapper1">
                  <button className="btns" onClick={() => onRemove(product)}>-</button>
                  <p>
                    {product.qty} 
                  </p>
                  <button  className="btns" onClick={() => onAdd(product)}>+</button>
 
                  </div>
                  <button className="btns" onClick={() => removefromCart(product)}>Remove</button>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
