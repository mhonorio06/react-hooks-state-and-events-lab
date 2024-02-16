import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setisInCart] = useState(false)
  function handleCartClick(){
    //initialize setter function
    setisInCart(isInCart => !isInCart)
  }
  
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleCartClick}
      >{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
