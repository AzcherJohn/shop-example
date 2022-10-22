import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: "counter",
   initialState: {
      value: 0,
   },
   reducers: {
      increment: (state, action) => {
         state.value += action.payload;
      },
   }
});


const productStore = configureStore({
   reducer: counterSlice.reducer,
});

const { increment } = counterSlice.actions;

export { productStore, increment, };