import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../../Hooks/useApi";
import { updateFullCart } from "../../../../Redux/CartSlice";

const ProductItem = (props) => {
	console.log("PRODUCT ITEM PROPS", props);

	const cartState = useSelector((state) => state.cartState);
	// console.log("CART STATE", cartState);
	const api = useApi();
	const dispatch = useDispatch();

	const onAddToCartClick = (event) => {
		event.preventDefault();
		console.log("ADD TO CART CLICKED", props.product);

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
						<a
							href={"/product/" + props.product.code}
							className="product-title"
						>
							{props.product.name}
						</a>
					</h5>
					<div className="product-meta">
						<a href="#" className="product-price">
							{cartState.unitPrice}
						</a>
						<a href="#" className="discounted-price">
							$1400
						</a>
						<span className="offer-price">20%off</span>
					</div>
					<div className="shopping-btn">
						<button
							onClick={onAddToCartClick}
							className="product-btn btn-cart btn-link text-center"
						>
							<i className="fa fa-shopping-cart"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
