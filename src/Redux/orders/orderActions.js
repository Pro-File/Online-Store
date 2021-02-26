import History from "../../Components/History/History";
import { firestore, serverTimestamp } from "../../Firebase/Firebase";

// Generating Order with Order Information
export var generateOrder = () => async (dispatch, getState) => {
    try{
        var state = getState();
        var {auth, cart: products} = state;
        var OrderInfo = {
            ...auth,
            products,
            createdAt : serverTimestamp(),
            OrderStatus: "pending",
        }
        // console.log(OrderInfo);
        var Order = await firestore.collection("orders").add(OrderInfo);
        console.log(Order.id);
        History.push(`/checkout/${Order.id}`);
    }
    catch(error){
        console.log(error);
    }
}