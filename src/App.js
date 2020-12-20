import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/home/Home';
import Category from './Pages/category/Category';
import Authentication from './Pages/authentication/Authentication';
import CategoryProducts from './Pages/category-products/CategoryProducts';
import Checkout from './Pages/checkout/Checkout';
import {checkAuthStatus} from './Redux/auth/authActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';



function App({checkAuthStatus}) {
  useEffect(()=>{

  checkAuthStatus()

},[])
  return (
    <div className="App">
     <h1>Ecommerce Website</h1>
     <Switch>
       <Route path="/" component = {Home} exact/>
       <Route path="/auth" component = {Authentication}/>
       <Route path="/categories" component = {Category}/>
       <Route path="/category-products" component = {CategoryProducts}/>
       <Route path="/checkout" component = {Checkout}/>

     </Switch>
    </div>
  );
}

var actions = ({
  checkAuthStatus
})

export default connect(null, actions)(App);
