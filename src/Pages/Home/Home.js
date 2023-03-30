import React from "react";
import LatestProduct from "./Companents/LatestProduct/LatestProduct";
import Products from "./Companents/Products/Products";
import Slider from "./Companents/Slider/Slider";

const Home = () => {
	return (
		<>
			<Slider />
			<Products />
			<LatestProduct />
		</>
	);
};

export default Home;
