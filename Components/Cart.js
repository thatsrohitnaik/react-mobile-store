import React, { useContext,useReducer } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { CartReducer } from '../Context/CartReducer';


export default function Cart() {

  const {state} = useContext(GlobalContext);

  console.log(state.cart)

  return <div className="container">
    {
      state.cart.map((product) => { return (<div key={product.id}>{product.id} </div>) })
    }</div>

}