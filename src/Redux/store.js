import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CategorySlice from "./CategorySlice";
import CartSlice from "./CartSlice";

export default configureStore({
	reducer: {
		authState: AuthSlice,
		categoryState: CategorySlice,
		cartState: CartSlice,
	},
});
