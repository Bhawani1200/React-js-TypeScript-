import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import productReducer from "./products/productSlice";
import categoryReducer from "./categories/categorySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
