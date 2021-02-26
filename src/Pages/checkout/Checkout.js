import React,{useState} from 'react'
import { connect } from 'react-redux';
import CheckOutList from '../../Components/CheckOutList/CheckOutList';
import OrderForm from '../../Components/OrderForm/OrderForm';
import { CalculateBill } from '../../Utility/CalculateBill';

const Checkout = ({TotalAmmount, cartItems}) => {
    var [ProceedStatus, SetProceedStatus] = useState(false);
    return (
        <div>
            <h3 align="center">Check Out</h3>
            <CheckOutList cartItems = {cartItems}/>
            <div align = "center" className="div">
            <h1> Ammount: <span>{TotalAmmount} $</span></h1>
            <button className="add" onClick={()=> SetProceedStatus(!ProceedStatus)}>Proceed & Pay</button>
            { ProceedStatus && <OrderForm/> }
            </div>
        </div>
    )
}
var mapState = (state) =>({
    cartItems: state.cart,
    TotalAmmount :CalculateBill(state.cart),
})
export default connect(mapState, null)(Checkout)
