import React, { useState, useEffect, useReducer } from 'react'
import { CartReducer } from './CartReducer';
import data from '../asset/data';
import { ProductReducer } from './ProductReducer';

export const GlobalContext = React.createContext();

const initialState = { ...data }

export function GlobalProvider({ children }) {

  const [state, dispatch] = useReducer(CartReducer, initialState);
 // const [state, dispatchProduct] = useReducer(ProductReducer, initialState);


  function addToCart(payload) {
    if (!state.cart.some(e => e.id === payload.id)) {
      dispatch({ type: 'ADD_TO_CART', payload });
      dispatch({ type: 'SET_INCART_VALUE', payload });
    }
  }

  return <GlobalContext.Provider value={{ state: state, addToCart }}>{children}</GlobalContext.Provider>
}