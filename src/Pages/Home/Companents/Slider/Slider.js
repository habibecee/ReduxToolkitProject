import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = (props) => {
	return (
		<div className="container">
			<Carousel
				showArrows={true}
				onChange={() => {
					// console.log("onChange", arguments);
				}}
				onClickItem={() => {
					// console.log("onClickItem", arguments);
				}}
				onClickThumb={() => {
					// console.log("onClickThumb", arguments);
				}}
			>
				<div>
					<img src="/images/slider_1.jpg" />
					<p className="legend">PRODUCT 1</p>
				</div>
				<div>
					<img src="/images/slider_2.jpg" />
					<p className="legend">PRODUCT 2</p>
				</div>
				<div>
					<img src="/images/slider_3.jpg" />
					<p className="legend">PRODUCT 3</p>
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;
