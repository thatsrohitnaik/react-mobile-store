import React, { useContext, useEffect, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import ProductCard from './ProductCard';

export default function ProductsPage() {
 
  const {state} = useContext(GlobalContext)

  return <div className="ui stackable four column grid conatiner">
      {
        state.products.map((product) => { return <ProductCard key={product.id} product={product} /> })
      }
  </div>

}