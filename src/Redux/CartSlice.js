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
			// console.log("SET TOKEN VALUE:", action);
			localStorage.setItem("cartTokenValue", action.payload.tokenValue);
			state.tokenValue = action.payload.tokenValue;
			state.id = action.payload.id;
		},

		updateFullCart: (state, action) => {
			//BÜTÜN STATE YENİ BAŞTAN OLUŞTURULABİLSİN DİYE BU ŞEKİLDE KULLANILMALI
			// console.log("UPDATE FULL CART:", action);
			return action.payload;
		},
	},
});

export default CartSlice.reducer;
export const { setTokenValue, updateFullCart } = CartSlice.actions;
