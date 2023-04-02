import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../Hooks/useApi";
import { updateFullCart } from "../../../Redux/CartSlice";

const CartItem = (props) => {
	console.log("CART ITEM PROPS", props);
	const cartState = useSelector((state) => state.cartState);
	console.log("CART STATE", cartState);
	const api = useApi();
	const dispatch = useDispatch();

	const onQuantityChange = (event) => {
		console.log("QUANTITY CHANGED", event.target.value);
	};

	const onDelete = (event) => {
		api
			.delete(`shop/orders/${cartState.tokenValue}/items/${props.id}`)
			.then((response) => {
				console.log("DELETE RESPONSE", response);

				api
					.get(`shop/orders/${cartState.tokenValue}`)
					.then((response) => {
						dispatch(updateFullCart(response.data));
					})
					.catch((error) => console.log("CART UPDATE ERROR", error));
			})
			.catch((err) => console.log("DELETE ERROR", err));
	};
	return (
		<tr>
			<td>
				<a href="#">
					<img src="/images/cart_product_1.png" alt="" />
				</a>
				<span>
					<a href="#">{props.productName}</a>
				</span>
			</td>
			<td>
				{props.unitPrice}
				&nbsp;
				{cartState.currencyCode}
			</td>

			<td>
				{props.total} &nbsp;
				{cartState.currencyCode}{" "}
			</td>
			<td>
				<div className="product-quantity">
					<div className="quantity">
						<input
							type="number"
							className="input-text qty text"
							step="1"
							min="1"
							max="6"
							name="quantity"
							defaultValue={props.quantity}
							title="Qty"
							size="4"
							pattern="[0-9]*"
							onChange={onQuantityChange}
						/>
					</div>
				</div>
			</td>
			<th scope="row">
				<button className="btn-link btn-close" onClick={onDelete}>
					<i className="fa fa-times-circle-o"></i>
				</button>
			</th>
		</tr>
	);
};

export default CartItem;
