import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/home/Home';
import Category from './Pages/category/Category';
import Authentication from './Pages/authentication/Authentication';
import CategoryProducts from './Pages/category-products/CategoryProducts';
import Cart from './Pages/cart/Cart';
import Checkout from './Pages/checkout/Checkout';
import {checkAuthStatus} from './Redux/auth/authActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Test from './Pages/Test/Test';
import NavBar from './Components/NavBar/NavBar';
import Product from './Pages/product/Product';



function App({checkAuthStatus}) {
  useEffect(()=>{

  checkAuthStatus();

},[checkAuthStatus])
  return (
    <div className="App">
     <NavBar/>
     
     <Switch>
       <Route path="/" component = {Home} exact/>
       <Route path="/auth" component = {Authentication}/>
       <Route path="/categories" component = {Category}/>
       <Route path="/category-products/:category" component = {CategoryProducts}/>
       <Route path="/product/:productId" component = {Product}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/checkout/:orderId" component = {Checkout}/>
       <Route path="/test" component = {Test}/>
     </Switch>
    </div>
  );
}

var actions = ({
  checkAuthStatus
})

export default connect(null, actions)(App);
