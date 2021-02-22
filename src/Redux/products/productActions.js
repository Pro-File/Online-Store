import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from 'uuid';
import { REMOVE_ALL_PRODUCTS, SET_PRODUCTS } from "./productConstants";
import {categorizeProducts} from './../../Utility/CategorizeProducts';

// Admin Panel 
export var addProduct = (productObj) => async () => {
  try {
    // 1-  send file to storage and get URL
    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObj.photo);
    // fileListener.on(event_type, cb-Status, cb-error-handling, cb-will trigger after file being uploaded)
    fileListener.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is '+progress+'% done..');
    },
    (error)=>{
        console.log(error);
    },
    async()=>{
        var downloadURL = await imageRef.getDownloadURL();
        // 2- Modify productObj with photo and createdAt
        productObj.photo = downloadURL;
        productObj.createdAt = serverTimestamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        // 3- create doc in the firestore Products  
        await firestore.collection("products").add(productObj);
        
    }
    );
  } catch (error) {
    console.log(error);
  }
};

// Ecommerce App Actions
// Fetch All Products from Firestore
export var fetchProducts = () => async(dispatch) => {
    try {
      var products = [];
      var query = await firestore.collection("products").get();
      query.docs.forEach((doc)=>{
        products.push({...doc.data(), id: doc.id});
      });
      dispatch({
        type: SET_PRODUCTS,
        payload: {
          products
        }
      })
    // var CategorizedProducts = categorizeProducts(products);
    // console.log(CategorizedProducts);
    } catch (error) {
      console.log(error);
    }
}
// Fetch Category Products
export var fetchCategoryProducts = (category) => async(dispatch) => {
    try {
      var products = [];
      var query = await firestore.collection("products").where("category","==",category).get();
      query.docs.forEach((doc)=>{
        products.push({...doc.data(), id: doc.id});
      });
      // console.log(products)
      dispatch({
        type: SET_PRODUCTS,
        payload: {
          products
        }
      })
    } catch (error) {
      console.log(error)
    }
}
// Remove All Products
export var removeAllProducts = () => async(dispatch) =>{
  try {
    var products = [];
    dispatch({
      type: REMOVE_ALL_PRODUCTS,
      payload: {
        products
      }
    })
  } catch (error) {
    console.log(error)
  }
}