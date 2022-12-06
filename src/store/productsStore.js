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
            product.totalPerProd = cartTotalPerProduct(action.payload);
         } else {            
            state.cart.push({...action.payload, totalPerProd: cartTotalPerProduct(action.payload)});
         }
      },
      removeProduct: (state, action) => {
         state.cart = state.cart.filter(product => product.id !== action.payload.id);
      },
      removeAllProducts: (state) => {
         state.cart = [];
      }
   }
});

function formatFloat(stringNumber){
   return parseFloat(stringNumber.replace(/,/g, ""));
}
function formatAmountNumber(number){
   return parseFloat(number).toFixed(2).replace(/(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');
}

function cartTotalPerProduct(product) {
   const price = formatFloat(product.price);
   const val = price * parseFloat(product.quantity);
   return formatAmountNumber(val);
};

function saveCart(cart) {
   localStorage.setItem("cart", JSON.stringify(cart))
};

const cartCountSelector = (state) => {
   saveCart(state.cart);
   return state.cart.reduce((total, product) => {
      return total += parseInt(product.quantity)
  },0)
};

const cartTotalSelector = (state) => {
   return formatAmountNumber(
      state.cart.reduce((total, product) => {
         return total = parseFloat(total) + formatFloat(product.totalPerProd);
      },0)
   )
}


const productStore = configureStore({
   reducer: cartSlice.reducer,
});

const { addProduct, removeProduct, removeAllProducts } = cartSlice.actions;

export { productStore, addProduct, removeProduct, removeAllProducts, cartCountSelector, cartTotalSelector };