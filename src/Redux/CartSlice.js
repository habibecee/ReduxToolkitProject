import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tokenValue: localStorage.getItem("cartTokenValue"),
	items: [],
	id: null,
};

export const CartSlice = createSlice({
	name: "CartSlice",
	initialState,
	reducers: {
		setTokenValue: (state, action) => {
			console.log("SET TOKEN VALUE:", action);
			localStorage.setItem("cartTokenValue", action.payload.tokenValue);
			state.tokenValue = action.payload.tokenValue;
			state.id = action.payload.id;
		},
	},
});

export default CartSlice.reducer;
export const { setTokenValue } = CartSlice.actions;
