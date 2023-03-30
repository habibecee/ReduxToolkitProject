import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Companents/Footer/Footer";
import Header from "./Companents/Header/Header";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="category/:slug" element={<Category />} />
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
