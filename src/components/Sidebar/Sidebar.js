import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = ({ toggle, show, isAuth, signUserOut }) => {
 
  
  
  
  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        Close
      </div>
      
      <div className="side_menu">
      
    
        
    <Link className="side_link" onClick={()=>toggle()} to="/works">Works</Link>


      <Link className="side_link" onClick={()=>toggle()} to="/cart">Cart</Link>
        <Link to="/cart" className="side_link" onClick={()=>toggle()}>
         Contact
        </Link>
       

       
        {!isAuth ? (
            <Link className="side_link" to="/signin" onClick={()=>toggle()}>Login</Link>
          ) : (
           
            <button className="logout"  onClick={signUserOut}>
              Log Out
            </button>
          
          )}
 
          

       
      </div>
    </div>
   
  );
};

export default Sidebar;
