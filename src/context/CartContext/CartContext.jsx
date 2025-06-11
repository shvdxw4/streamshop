import {createContext, useContext, useReducer} from "react";
import {cartReducer} from "./cartReducer";

const CartContext = createContext();

const initialState = {
    cart: []
};

export const CartProvider = ({children}) => {
    const[state, dispatch] = useReducer(cartReducer, initialState);

    
    console.log("Cart state updated:", state.cart);

    return (
        <CartContext.Provider value={{cart: state.cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); 