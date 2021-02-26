import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';

const OrderForm = ({UserInfo}) => {
    // Full Name, Address, Email, Phone.

    var [FullName,setFullName] = useState("");
    var [Email,setEmail] = useState("");
    var [Phone,setPhone] = useState("");
    var [Address,setAddress] = useState("");
     
    useEffect(() => {
        var {fullName, email, phone, address} = UserInfo;
        setFullName(fullName ? fullName : "");
        setEmail(email ? email : "");
        setPhone(phone ? phone : "");
        setAddress(address ? address : "");
    },[])

var HandleSubmit = (e) =>{
    e.preventDefault();
    var ShipmentInfo = {
        FullName,
        Email,
        Phone,
        Address,
    }
    // console.log(ShipmentInfo);
}
     
    return (
        <div>
            <h1 align="center">Order From</h1>
            <form onSubmit={HandleSubmit}>
            <input 
            type="text" 
            placeholder="Enter Full Name" 
            value={FullName} 
            onChange={(e) => setFullName(e.target.value)}/>
<br/>
            <input 
            type="text" 
            placeholder="Enter Your Email" 
            value={Email} 
            onChange={(e) => setEmail(e.target.value)}/>
<br/>         
            <input 
            type="number" 
            placeholder="Enter your Contact Number" 
            value={Phone} 
            onChange={(e) => setPhone(e.target.value)}/>
<br/>
            <input 
            type="text" 
            placeholder="Enter Your Address" 
            value={Address} 
            onChange={(e) => setAddress(e.target.value)}/>
<br/>
            <button type="submit" className="add">Pay NOW </button>

            </form>
        </div>
    )
}

var mapState = (state) => ({
    UserInfo : state.auth, 
})

export default connect(mapState,null)(OrderForm)
