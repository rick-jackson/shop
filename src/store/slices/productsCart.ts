import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

const initialState = {
  productsCart: [],
};

export const ProductsCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    getProductsCart: (state) => {
      state.productsCart =
        JSON.parse(localStorage.getItem("productsCart")) || [];
    },

    addProductsCart: (state, action: PayloadAction<number>) => {
      state.productsCart = [
        ...state.productsCart,
        { id: action.payload, count: 1 },
      ];
      enqueueSnackbar("Product added!", { variant: "success" });
      localStorage.setItem("productsCart", JSON.stringify(state.productsCart));
    },

    deleteProductsCart: (state, action: PayloadAction<number>) => {
      const filteredShopping = state.productsCart.filter(
        (shopping) => shopping.id !== action.payload
      );
      state.productsCart = filteredShopping;
      localStorage.setItem("productsCart", JSON.stringify(filteredShopping));
    },

    incrementProductsCart: (
      state,
      action: PayloadAction<{ id: number; action: string }>
    ) => {
      const preparedShopping = state.productsCart.map((shopping) => {
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
      state.productsCart = preparedShopping;
      localStorage.setItem("productsCart", JSON.stringify(preparedShopping));
    },

    clearProductsCart: (state) => {
      state.productsCart = [];
      localStorage.setItem("productsCart", JSON.stringify([]));
    },
  },
});

export default ProductsCartSlice.reducer;
