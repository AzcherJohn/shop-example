import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
   cart: JSON.parse( localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addProduct: (state, action) => {
         const product = state.cart.find(prod => prod.id === action.payload.id)
         if (product) {
            product.quantity = action.payload.quantity;
         } else {            
            state.cart.push(action.payload);
         }
      },
      removeProduct: (state, action) => {

      },
   }
});

function saveCart(cart) {
   localStorage.setItem("cart", JSON.stringify(cart))
};

const cartCountSelector = (state) => {
   saveCart(state.cart);
   return state.cart.reduce((total, product) => {
      return total += parseInt(product.quantity)
  },0)
}

const productStore = configureStore({
   reducer: cartSlice.reducer,
});

const { addProduct, removeProduct } = cartSlice.actions;

export { productStore, addProduct, removeProduct, cartCountSelector };