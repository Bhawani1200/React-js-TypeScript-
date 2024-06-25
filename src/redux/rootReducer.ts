import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import productReducer from "./products/productSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
