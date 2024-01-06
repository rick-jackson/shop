import { AppDispatch } from "@store/index";
import { ShoppingSlice } from "../slices/shopping";

export const getShoppings = () => (dispatch: AppDispatch) => {
  dispatch(ShoppingSlice.actions.getShoppings());
};

export const addShopping = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ShoppingSlice.actions.addShopping(id));
};

export const deleteShopping = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ShoppingSlice.actions.deleteShopping(id));
};

export const incrementShopping =
  ({ id, action }: { id: number; action: string }) =>
  (dispatch: AppDispatch) => {
    dispatch(ShoppingSlice.actions.incrementShopping({ id, action }));
  };
