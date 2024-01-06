import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "@store/slices/shopping";

const rootReducer = combineReducers({
  shoppings: shoppingReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
