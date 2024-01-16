import type { AppDispatch } from "@store/index";
import { ProductsCartSlice } from "../slices/productsCart";

export const getProductsCart = () => (dispatch: AppDispatch) => {
  dispatch(ProductsCartSlice.actions.getProductsCart());
};

export const addProductsCart = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ProductsCartSlice.actions.addProductsCart(id));
};

export const deleteProductsCart = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ProductsCartSlice.actions.deleteProductsCart(id));
};

export const toggleProductCount =
  ({ id, action }: { id: number; action: string }) =>
  (dispatch: AppDispatch) => {
    dispatch(ProductsCartSlice.actions.toggleProductCount({ id, action }));
  };

export const clearProductsCart = () => (dispatch: AppDispatch) => {
  dispatch(ProductsCartSlice.actions.clearProductsCart());
};
