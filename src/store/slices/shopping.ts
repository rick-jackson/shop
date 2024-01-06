import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppings: [],
};

export const ShoppingSlice = createSlice({
  name: "shoppings",
  initialState,
  reducers: {
    getShoppings: (state) => {
      state.shoppings = JSON.parse(localStorage.getItem("shoppings")) || [];
    },
    addShopping: (state, action) => {
      state.shoppings = [...state.shoppings, { id: action.payload, count: 1 }];
      localStorage.setItem("shoppings", JSON.stringify(state.shoppings));
    },
    deleteShopping: (state, action) => {
      const filteredShoppings = state.shoppings.filter(
        (shopping) => shopping.id !== action.payload
      );
      state.shoppings = filteredShoppings;
      localStorage.setItem("shoppings", JSON.stringify(filteredShoppings));
    },

    incrementShopping: (state, action) => {
      const preparedShoppings = state.shoppings.map((shopping) => {
        if (shopping.id === action.payload.id) {
          return {
            ...shopping,
            count:
              action.payload.action === "decrement"
                ? shopping.count - 1
                : shopping.count + 1,
          };
        } else return shopping;
      });
      state.shoppings = preparedShoppings;
      localStorage.setItem("shoppings", JSON.stringify(preparedShoppings));
    },
  },
});

export default ShoppingSlice.reducer;
