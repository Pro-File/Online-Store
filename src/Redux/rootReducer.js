import {combineReducers} from 'redux';
import AuthReducer from './auth/AuthReducer';
var rootReducer = combineReducers({
    auth: AuthReducer,
})
export default rootReducer;