import { categorizeCartItems } from "../../Utility/CategorizeCartItems";
import { RemoveCartItems } from "../../Utility/RemoveCartItems";
import { ADD_TO_CART, ELIMINATE_FROM_CART, REMOVE_FROM_CART, SET_TO_CART } from "./cartConstants";

 var initialState = [];
 var cartReducer = (state = initialState, action) =>{
    var {type, payload} = action;
    switch (type) {
        case ADD_TO_CART:
            return categorizeCartItems(state, payload.product);
        case REMOVE_FROM_CART:
            return RemoveCartItems(state, payload.product);
        case ELIMINATE_FROM_CART:
        return state.filter((product) => product.id != payload.product.id);
        case SET_TO_CART:
            return [...payload];
        default:
            return state;
    }
 }

 export default cartReducer;