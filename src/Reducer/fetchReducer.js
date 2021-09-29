import { FETCH_PRODUCT } from "../ActionTypes/fetchActionType"
const initialState = {
    productList: [],
    fetchDone: false
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            state.fetchDone = true;
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state
    }
}
export default fetchReducer;