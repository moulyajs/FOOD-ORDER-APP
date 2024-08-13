import { createContext,useReducer } from "react";
const CartContext = createContext({
    items:[],
    addItem: (item) => {},
    removeItem: (item) => {},
});

function CartReducer (state,action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id);

        const updatedItems = [...state.items];
        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: state.items[existingCartItemIndex].quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems.push({...action.item,quantity:1});
        }
        return {...state,items:updatedItems};
    }
    if (action.type === 'REMOVE_ITEM') {
        
    }
    return state;

}
export  function CartContextProvider ({children}) {
    useReducer(CartReducer,{items:[]});
    return <CartContext.Provider>{children}</CartContext.Provider>
}
export default CartContext;