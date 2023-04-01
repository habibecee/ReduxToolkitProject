import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CategorySlice from "./CategorySlice";

export default configureStore({
	reducer: {
		authState: AuthSlice,
		categoryState: CategorySlice,
	},
});
