import React, { useState } from "react";
import { connect } from 'react-redux';
import {addProduct} from './../../Redux/products/productActions';

const Test = ({addProduct}) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [description, setDescription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [photo, setPhoto] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault();
    var productObj = {
      category,
      title,
      description,
      cost,
      quantity,
      photo,
    };
    addProduct(productObj);
  };
  return (
    <div>
      <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter Category"
          value={category}
        /> <br/>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          value={title}
        />  <br/>
        <input
          onChange={(e) => setCost(e.target.value)}
          type="text"
          placeholder="Cost"
          value={cost}
        />  <br/>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
          placeholder="description"
          value={description}
        ></textarea>  <br/>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          placeholder="Quantity"
          value={quantity}
        />  <br/>
        <input onChange={(e) => setPhoto(e.target.files[0])} type="file" placeholder="Enter Photo" />
        <hr/> <button type="submit">ADD</button>
      </form>
    </div>
  );
};

var actions = ({
    addProduct
})

export default connect(null,actions)(Test);
