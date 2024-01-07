import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsCartReducer from "@store/slices/productsCart";

const rootReducer = combineReducers({
  productsCart: productsCartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
