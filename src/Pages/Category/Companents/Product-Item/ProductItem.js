import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../../Hooks/useApi";
import { updateFullCart } from "../../../../Redux/CartSlice";

const ProductItem = (props) => {
	console.log("PRODUCT ITEM PROPS", props.product);

	const cartState = useSelector((state) => state.cartState);
	const api = useApi();
	const dispatch = useDispatch();

	const onAddToCartClick = (event) => {
		event.preventDefault();
		console.log("ADD TO CART CLICKED", props.product);
		alert("CART BUTONUNA TIKLANDI");

		const productVariant = props.product.defaultVariant.replace(
			"/api/v2/shop/product-variants/",
			""
		);

		const postData = {
			productVariant: productVariant,
			quantity: 1,
		};

		api
			.post(`shop/orders/${cartState.tokenValue}/items`, postData)
			.then((response) => {
				console.log("ADD TO CART RESPONSE", response);
				dispatch(updateFullCart(response.data));
			})
			.catch((err) => console.log("ADD TO CART ERROR", err));
	};
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
			<div className="product-block">
				<div className="product-img">
					<img
						src={
							"https://ecommerce-api.udemig.dev" + props.product.images[0].path
						}
						alt=""
					/>
				</div>
				<div className="product-content">
					<h5>
						<a href="#" className="product-title">
							{props.product.name}
						</a>
					</h5>
					<div className="product-meta">
						<a href="#" className="product-price">
							$1100
						</a>
						<a href="#" className="discounted-price">
							$1400
						</a>
						<span className="offer-price">20%off</span>
					</div>
					<div className="shopping-btn">
						<a
							href="#"
							onClick={onAddToCartClick}
							className="product-btn btn-cart"
						>
							<i className="fa fa-shopping-cart"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
