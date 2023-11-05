import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../Assets/Products/products';
export const ShopContext = createContext(null);

const getDefaultCart =() =>{
    let cart = {};
    for (let i =1; i<PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider =(props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in  cartItems){
            let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
            totalAmount += itemInfo.price * cartItems[item]; 
        }
        return totalAmount;
    }
    const addToCart = (itemId)=>{
        setCartItems((prev)=>{
            const newQuantity = prev[itemId] ? prev[itemId] + 1 : 1;
            return {...prev, [itemId]: newQuantity};
        })
    }

    const removeFromCart = (itemId)=>{
        if(cartItems[itemId]>=1){
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
        }
    }

    const updateCartItemCount = (newAmount, itemId) =>{
        if(newAmount >=0){
            setCartItems((prev)=>({...prev, [itemId]:newAmount}));
        }
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
      }

    const checkout =()=>{
        setCartItems(getDefaultCart());
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        checkout,
        getTotalCartItems,
    };

    return(
       <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};