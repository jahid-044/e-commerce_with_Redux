import { createStore } from 'redux'
import shopReducer from '../Reducer/shopReducer'
const store = createStore(shopReducer)
export default store;