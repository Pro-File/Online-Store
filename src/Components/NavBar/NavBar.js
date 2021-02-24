import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className="navBar flex">
            <div>
                <Link to="/">
                <h2>LOGO</h2>
                </Link> 
                </div>
            
            <div>
            <Link to="/categories"> <h3>Categoies</h3></Link>
            </div>

            <div><Link to="/auth"><h3>Auth</h3></Link>
            </div>

            <div><Link to="/cart"><h3>Cart</h3></Link>
            </div>
           
        </div>
    ) 
}

export default NavBar
