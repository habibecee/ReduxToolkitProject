import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// TODO - TOKEN BİLGİSİNİ LOCAL STORAGE'DAN AL VE İNİTİAL STATE'E AT
	token: localStorage.getItem("token"),
	customerId: localStorage.getItem("customerId"),
	customerDetails: null,
};

export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState,
	reducers: {
		//Buradaki objeler action fonksiyonlarıdır.
		setToken: (state, action) => {
			//TODO -DOLDURULACAK
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("customerId", action.payload.customerId);
			state.token = action.payload.token;
			state.customerId = action.payload.customerId;
		},

		removeToken: (state, action) => {
			//TODO -DOLDURULACAK
			localStorage.removeItem("token");
			state.token = null;
			state.customerId = null;
			state.customerDetails = null;
		},

		setCustomerDetails: (state, action) => {
			console.log("SET CUSTOMER DETAILS:", action);
			state.customerDetails = action.payload.customerDetails;
		},
	},
});

export default AuthSlice.reducer;
export const { setToken, removeToken, setCustomerDetails } = AuthSlice.actions;
