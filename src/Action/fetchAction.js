import axios from 'axios'
import { fetchAction } from '../ActionTypes/fetchActionType'
export const fetchProduct = async (dispatch) => {
    const res = await axios.get('https://fakestoreapi.com/products')
    dispatch({
        type: fetchAction.FETCH_PRODUCT,
        payload: res.data
    })
}