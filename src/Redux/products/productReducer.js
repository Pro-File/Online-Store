import React from 'react';
import { REMOVE_ALL_PRODUCTS, SET_PRODUCTS } from './productConstants';

var initialState = [];
const productReducer = (state = initialState, action) => {
   var {type, payload} = action;
    switch (type) {
       case SET_PRODUCTS:
           return [...payload.products];
        case SET_PRODUCTS:
               return [...payload.products];
               case REMOVE_ALL_PRODUCTS:
                   return [...payload.products];
        default:
            return state;
    }
}

export default productReducer
