import { createStore } from 'redux'
import shopReducer from '../Reducer/shopReducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, shopReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
