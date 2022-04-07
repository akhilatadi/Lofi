import React, { useEffect, useState } from "react";
import "./Work.css";
import { art } from "../../Data/artData";


function Work({onAdd,cart,setCart}) {

    
  ////////////////////////////////price calc

  


  // useEffect(()=>{
  //   const art= localStorage.getItem('my-art');
  //  if(art){
  //    setCart(JSON.parse(art));
  //  }
  //  },[])
   
  //    useEffect(()=>{
  //      localStorage.setItem('my-art',JSON.stringify(cart))
  //    },[cart])
   
     


  const [painting, setpainting] = useState(art);

  return (
    <div className="work_cont">
      <div className="work_wrapper">
        {painting.map((product, id) => (
          <div className="item_wrapper" key={id}>
            <img src={product.img} />
            <div className="content_wrapper">
              <h1> {product.title}</h1>
              <p>Price: ${product.price}</p>
              <div className="btn_wrapper">
               <a style={{textDecoration:"none", color:"white"}} target="_blank" href={product.img}><button>View</button></a>
                <button onClick={() => onAdd(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      </div>
    
  );
}

export default Work;
