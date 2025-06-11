export const cartReducer=(state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if(existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity:1}]
            };
        
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            };
        
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? {...item, quantity: item.quantity - 1}
                        :item
                )
            };
        
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(item =>
                    item.id !== action.payload)
            };

        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };

            default:
                return state;
    }
};