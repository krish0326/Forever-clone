import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showsearch, setShowsearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  

  const addTocart = async (itemId, size) => {
    
    if(!size){
         toast.error("select product size");
         return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

const getCartcount = () => {
  let totalCount = 0;
  for (const item in cartItems) {
    try {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          totalCount += cartItems[item][size];
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return totalCount;
};

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  const updateQuantity = async (itemId, size,quantity) =>{
     let cartData = structuredClone(cartItems);
     cartData[itemId][size] = quantity;
     setCartItems(cartData); 
  }

  const  getcartamount =  () => {
    let totalamount = 0 ;
    for(const items in cartItems){
      let iteminfo = products.find((product)=>product._id === items);
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item] > 0){
            totalamount += iteminfo.price * cartItems[items][item];
          }
        }catch(error){
          console.log(error);
        }
      }
    }
    return totalamount;
  }



  const value = {
    products,
    currency,
    delivery_fee,
    showsearch,
    setShowsearch,
    setSearch,
    search,
    cartItems,
    addTocart,
    getCartcount,
    updateQuantity,
    getcartamount,
    navigate,
  };
  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
