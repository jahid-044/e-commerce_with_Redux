import { fetchAction } from "../ActionTypes/fetchActionType"
const initialState = {
    productList: []
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchAction.FETCH_PRODUCT:
            return {
                productList: action.payload
            }
        default:
            return state
    }
}
export default fetchReducer;