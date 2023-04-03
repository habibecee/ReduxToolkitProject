import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Footer from "./Companents/Footer/Footer";
import Header from "./Companents/Header/Header";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

import useApi from "./Hooks/useApi";
import { setCategories } from "./Redux/CategorySlice";
import { setTokenValue, updateFullCart } from "./Redux/CartSlice";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
	const api = useApi();
	const dispatch = useDispatch();
	const categoryState = useSelector((state) => state.categoryState);
	console.log("categoryState", categoryState);
	const authState = useSelector((state) => state.authState);
	const cartState = useSelector((state) => state.cartState);

	if (!cartState.tokenValue) {
		const postData = {
			localeCode: "en_US",
		};
		api
			.post("shop/orders", postData)
			.then((response) => {
				console.log("CART RESPONSE", response);
				dispatch(
					setTokenValue({
						tokenValue: response.data.tokenValue,
						id: response.data.id,
					})
				);
			})
			.catch((err) => console.log("CART ERROR", err));
	} else if (!cartState.id) {
		api
			.get(`shop/orders/${cartState.tokenValue}`)
			.then((response) => {
				console.log("CART RESPONSE", response);
				dispatch(updateFullCart(response.data));
			})
			.catch((err) => console.log("CART ERROR", err));
	}

	// if (authState.token && authState.customerId && !authState.customerDetails) {
	// 	api
	// 		.get("shop/customers" + authState.customerId)
	// 		.then((response) => {
	// 			console.log("CUSTOMER RESPONSE", response);
	// 		})
	// 		.catch((err) => console.log("CUSTOMER ERROR", err));
	// }

	if (categoryState.categories === null) {
		api
			.get("shop/taxons")
			.then((response) => {
				console.log("CATEGORIES RESPONSE ", response);
				dispatch(
					setCategories({
						categories: response.data,
					})
				);
			})
			.catch((err) => console.log("CATEGORIES ERROR", err));
	}

	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="category/:taxon_code" element={<Category />} />
					<Route path="/product">
						<Route path=":productCode" element={<ProductDetails />} />
					</Route>
					<Route path="auth/login" element={<Login />} />
					<Route path="auth/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
