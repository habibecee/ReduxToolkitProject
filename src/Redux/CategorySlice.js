import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categories: null,
};

export const CategorySlice = createSlice({
	name: "CategorySlice",
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload.categories;
		},
	},
});

export default CategorySlice.reducer;
export const { setCategories } = CategorySlice.actions;
