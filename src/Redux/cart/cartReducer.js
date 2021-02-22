import { categorizeCartItems } from "../../Utility/CategorizeCartItems";
import { ADD_TO_CART } from "./cartConstants";

 var initialState = [];
 var cartReducer = (state = initialState, action) =>{
    var {type, payload} = action;
    switch (type) {
        case ADD_TO_CART:
            return categorizeCartItems(state,payload.product);
        default:
            return state;
    }
 }

 export default cartReducer;