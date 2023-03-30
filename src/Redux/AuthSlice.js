import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// TODO - TOKEN BİLGİSİNİ LOCAL STORAGE'DAN AL VE İNİTİAL STATE'E AT
	token: localStorage.getItem("token"),
};

export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState,
	reducers: {
		//Buradaki objeler action fonksiyonlarıdır.
		setToken: (state, action) => {
			//TODO -DOLDURULACAK
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
		},

		removeToken: (state, action) => {
			//TODO -DOLDURULACAK
			localStorage.removeItem("token");
			state.token = null;
		},
	},
});

export default AuthSlice.reducer;
export const { setToken, removeToken } = AuthSlice.actions;
