export const ProductReducer = (state, action) => {
  if (action.type === "SET_INCART_VALUE") {
    const products = state.products.map((product)=>{
      if(product.id === action.payload.id){
        product.inCart = true;
        return product;
      }
      return product;
    })
    state = {...state, products}
    return state
  }
  else {
    return state;
  }

}