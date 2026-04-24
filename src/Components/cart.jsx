import React from "react";
import { useSelector } from "react-redux";
import MenuList from "./menulist";
import { useDispatch } from "react-redux";
import { emptyCart } from "../utils/cartSlice";
const CartPage = ()=>{
   
const cartItems = useSelector((store)=> store.cart.items)
const dispatch = useDispatch();

const handleClearCart =() =>{
   dispatch(emptyCart(cartItems))
}

  return (
  <div className="flex flex-col items-center w-full">
    <h1 className="text-center font-bold text-2xl my-4">Cart</h1>
    {cartItems.length === 0
      ? <h2 className="text-center mt-10 font-bold text-lg">Cart is empty</h2>
      : <div className="w-1/2 ml-10">
          <MenuList menuInfo={cartItems} />
        </div>
    }
<button className="mt-1 text-lg bg-orange-500 hover:bg-red-600 text-white font-bold px-4 py-1 rounded-lg cursor-pointer transition-colors duration-200"
 onClick={handleClearCart}>
  Clear cart
</button>  </div>
);   
    
}

export default CartPage;