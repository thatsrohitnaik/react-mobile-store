
export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const s = { ...state, cart: [...state.cart, action.payload] };
      return s;

    case "SET_INCART_VALUE":
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.inCart = true;
          return product;
        }
        return product;
      })
      state = { ...state, products }
      return state;
      
    default: return state
  }

} 