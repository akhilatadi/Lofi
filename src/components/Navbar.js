import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cart, toggle,isAuth , signUserOut}) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    toggle();
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className="navbar_container">
        <div className="logo_name"><Link className="link" to="/">
           
  <div className="hover" >Lofi</div>
          </Link></div>
        <div className="space"></div>
        <div className="navbar_content">
          <Link className="link" to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link className="link" to="/works">
            {" "}
            <p>Works</p>
          </Link>
          <p>Contact</p>
          {!isAuth ? (
            <Link className="link" to="/signin" ><p>Login</p></Link>
          ) : (
           
           
            <p onClick={signUserOut}>Logout</p>
           
          
          )}

          <Link className="link" to="/cart">
            <p>
              <FaShoppingCart /> {cart?.length}{" "}
            </p>
          </Link>
        </div>
        <Link className="link" to="/cart">
            <p className="basket" style={{color:"white", padding:"10px"}}>
              <FaShoppingCart /> {cart?.length}{" "}
            </p>
          </Link>
        <div className="navIcon" onClick={toggle}>
        <FaBars className="icon"> </FaBars>
        </div> 
       

      </div>
    </nav>
  );
}

export default Navbar;
