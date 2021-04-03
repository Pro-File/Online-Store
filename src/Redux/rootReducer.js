import {combineReducers} from 'redux';
import AuthReducer from './auth/AuthReducer';
import cartReducer from './cart/cartReducer';
import modalReducer from './modals/modalReducer';
import productReducer from './products/productReducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import {storage} from 'redux-persist/lib/storage/session'; //Session Storage

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["auth", "cart"],
}

var rootReducer = combineReducers({
    auth: AuthReducer,
    products: productReducer,
    cart: cartReducer,
    modal: modalReducer,
})



export default persistReducer(persistConfig,rootReducer);