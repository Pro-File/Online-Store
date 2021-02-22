import {combineReducers} from 'redux';
import AuthReducer from './auth/AuthReducer';
import cartReducer from './cart/cartReducer';
import productReducer from './products/productReducer';
var rootReducer = combineReducers({
    auth: AuthReducer,
    products: productReducer,
    cart: cartReducer,
})
export default rootReducer;