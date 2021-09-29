import { shopActions } from "../ActionTypes/shopActionType"

const initialState = {
    cart: [],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case shopActions.ADD_ITEM:
            let newCart = state.cart.concat(action.payload)
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
            return {
                ...state,
                cart: modifiedCart
            }
        case shopActions.REMOVE_ITEM:
            const lightCart = state.cart.filter(itemKey => itemKey.item.id !== action.payload)
            return {
                ...state,
                cart: lightCart
            }
        case shopActions.FLUSH_CART:
            const emptyCart = []
            return {
                ...state,
                cart: emptyCart
            }
        default:
            return state;
    }
}

export default shopReducer