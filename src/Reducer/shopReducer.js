import { shopActions } from "../ActionTypes/shopActionType"

const initialState = {
    cart: [],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case shopActions.ADD_ITEM:
            let newCart = state.cart.concat(action.payload)
            localStorage.setItem("cartItem", JSON.stringify(newCart))
            return {
                ...state,
                cart: newCart
            }
        case shopActions.CHANGE_QUANTITY:
            let modifiedCart = [];
            for (const itemKey of state.cart) {
                if (itemKey.item.id === action.payload.id) {
                    itemKey.quantity = parseInt(action.payload.value);
                }
                if (itemKey.quantity !== 0)
                    modifiedCart.push(itemKey);
            }
            localStorage.setItem("cartItem", JSON.stringify(modifiedCart))
            return {
                ...state,
                cart: modifiedCart
            }
        case shopActions.REMOVE_ITEM:
            const lightCart = state.cart.filter(itemKey => itemKey.item.id !== action.payload)
            localStorage.setItem("cartItem", JSON.stringify(lightCart))
            return {
                ...state,
                cart: lightCart
            }
        case shopActions.FLUSH_CART:
            const emptyCart = []
            localStorage.setItem("cartItem", JSON.stringify(emptyCart))
            return {
                ...state,
                cart: emptyCart
            }
        default:
            return state;
    }
}

export default shopReducer