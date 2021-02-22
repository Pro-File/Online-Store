import { ADD_TO_CART } from "./cartConstants"


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