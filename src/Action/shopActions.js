import { shopActions } from "../ActionTypes/shopActionType";

export const addItem = (item) => {
    return {
        type: shopActions.ADD_ITEM,
        payload: item
    }

}

export const changeQuantity = (id, value) => {
    return {
        type: shopActions.CHANGE_QUANTITY,
        payload: { id, value }
    }

}

export const removeItem = (id) => {
    return {
        type: shopActions.REMOVE_ITEM,
        payload: id
    }

}

export const flushCart = () => {
    return {
        type: shopActions.FLUSH_CART
    }

}
