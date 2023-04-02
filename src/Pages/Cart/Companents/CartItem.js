import React from "react";

const CartItem = (props) => {
	console.log("CART ITEM PROPS", props);

	const onQuantityChange = (event) => {
		console.log("QUANTITY CHANGED", event.target.value);
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
			<td>$1100</td>
			<td>
				<div className="product-quantity">
					<div className="quantity">
						<input
							type="number"
							className="input-text qty text"
							step="1"
							min="1"
							max="10"
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
			<td>{props.total}</td>
			<th scope="row">
				<a href="#" className="btn-close">
					<i className="fa fa-times-circle-o"></i>
				</a>
			</th>
		</tr>
	);
};

export default CartItem;
