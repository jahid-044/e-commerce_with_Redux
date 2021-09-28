import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../Reducer/rootReducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = applyMiddleware(thunk)

export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)
