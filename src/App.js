import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work/Work";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from "./components/Signin/Login";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import Sidebar from "./components/Sidebar/Sidebar";

import { signOut } from "firebase/auth";

import { auth } from "./firebase";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [edit, setEdit] = useState(false);

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((show) => !show);
  };

  const[cart,setCart]= useState([])
  const onAdd = (product) => {
      const exist = cart.find((x) => x.id === product.id);
      if (exist) {
        setCart(
          cart.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCart([...cart, { ...product, qty: 1 }]);
      }
    };
  
    const onRemove = (product) => {
      const exist = cart.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCart(cart.filter((x) => x.id !== product.id));
      } else {
        setCart(
          cart.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

    const removefromCart=(productToRemove)=>{
      setCart(cart.filter((product) => product !== productToRemove))
      }

  return (
    <Router>
      <Navbar cart={cart} toggle={toggle} isAuth={isAuth} signUserOut={signUserOut}/>
      <Sidebar show={show} toggle={toggle}  isAuth={isAuth} signUserOut={signUserOut}/>
 
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Hero  isAuth={isAuth}/>} >
           
          </Route>

          <Route exact path="/cart" element={ <Cart  isAuth={isAuth} removefromCart={ removefromCart} onRemove={onRemove} onAdd={onAdd} cart={ cart} />}>
            
          </Route>

        
            <Route exact path="/checkout" element={ <Checkout  isAuth={isAuth}/> }>
            
            </Route>
      
            <Route exact path="/works" element={ <Work  isAuth={isAuth} onRemove={onRemove} onAdd={onAdd} cart={ cart} setCart={setCart} /> }>
            
            </Route>
       

          <Route exact path="/signin" element={ <Login setIsAuth={setIsAuth}/>}>
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
