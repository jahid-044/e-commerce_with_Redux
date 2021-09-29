import axios from 'axios'
import { FETCH_PRODUCT } from '../ActionTypes/fetchActionType'
export const fetchProduct = async (dispatch) => {
    const res = await axios.get('https://fakestoreapi.com/products')
    dispatch({
        type: FETCH_PRODUCT,
        payload: res.data
    })
}