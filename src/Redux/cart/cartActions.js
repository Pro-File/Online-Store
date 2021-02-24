import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { ADD_TO_CART, ELIMINATE_FROM_CART, REMOVE_FROM_CART, SET_TO_CART } from "./cartConstants"


// Adding Products to Cart 
export var AddToCart = (product) => async(dispatch) => {
    try {
        // console.log(product);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product
        }
    })
    } catch (error) {
        console.log(error)
    }
}
// Removing Products from Cart
export var RemoveFromCart = (product) => async(dispatch) => {
    try {
        // console.log(product);
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            product
        }
    })
    } catch (error) {
        console.log(error)
    }
}

// Eliminating Whole Product From Cart
export var EliminateFromCart = (product) => async(dispatch) =>{
    try {
        // console.log(product);
    dispatch({
        type: ELIMINATE_FROM_CART,
        payload: {
            product
        }
    })
    } catch (error) {
        console.log(error)
    }
}
