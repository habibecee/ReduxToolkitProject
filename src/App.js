import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Companents/Footer/Footer";
import Header from "./Companents/Header/Header";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import useApi from "./Hooks/useApi";
import { setCategories } from "./Redux/CategorySlice";

function App() {
	const authState = useSelector((state) => state.authState);
	const api = useApi();
	const dispatch = useDispatch();
	const categoryState = useSelector((state) => state.categoryState);
	console.log(categoryState);

	if (authState.token && authState.customerId && !authState.customerDetails) {
		api
			.get("/api/v2/shop/customers/" + authState.customerId)
			.then((response) => {
				console.log("CUSTOMER RESPONSE", response);
			})
			.catch((err) => console.log("CUSTOMER ERROR", err));
	}

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
					<Route path="auth/login" element={<Login />} />
					<Route path="auth/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
