import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../Companents/BreadCrumb/BreadCrumb";
import CartItem from "./Companents/CartItem";
import Loading from "../../Assets/ZUiY.gif";

const Cart = (props) => {
	const params = useParams();
	const cartState = useSelector((state) => state.cartState);

	if (cartState.id === null) {
		return (
			<div className="space-medium">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
							<img
								src={Loading}
								alt=""
								style={{ width: "500px", height: "500px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const CartItems = [];

	cartState.items?.map((item, index) => {
		CartItems.push(<CartItem key={index} {...item} />);
	});

	const breadcrumb = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Cart",
			href: "/cart",
		},
	];

	return (
		<>
			<BreadCrumb items={breadcrumb} />
			<div className="space-medium">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
							<div className="box">
								<div className="box-head">
									<h3 className="head-title">My Cart </h3>
								</div>
								<div className="box-body">
									<div className="table-responsive">
										<div className="cart">
											<table className="table table-bordered ">
												<thead>
													<tr>
														<th>
															<span>Item</span>
														</th>
														<th>
															<span>Price</span>
														</th>

														<th>
															<span>Total</span>
															<span>(VAT)</span>
														</th>
														<th>
															<span>Quantity</span>
														</th>
														<th></th>
													</tr>
												</thead>
												<tbody>{CartItems}</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<a href="/" className="btn-link">
								<i className="fa fa-angle-left"></i> back to shopping
							</a>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="box mb30">
								<div className="box-head">
									<h3 className="head-title">Price Details</h3>
								</div>
								<div className="box-body">
									<div className=" table-responsive">
										<div className="pay-amount ">
											<table className="table mb30">
												<tbody>
													<tr>
														<th>
															<span>
																Price ({cartState.items.length} items)
															</span>
														</th>
														<td>
															{cartState.items.reduce(
																(currentTotal, item) =>
																	currentTotal + item.subtotal,
																0
															)}{" "}
															{cartState.currencyCode}
														</td>
													</tr>
													<tr>
														<th>
															<span>Tax Totals</span>
														</th>
														<td>
															{cartState.taxTotal} {cartState.currencyCode}
														</td>
													</tr>
													<tr>
														<th>
															<span>Delivery Charges</span>
														</th>
														<td>
															{cartState.shippingTotal === 0 ? (
																<strong className="text-green">Free</strong>
															) : (
																<>
																	{cartState.shippingTotal}{" "}
																	{cartState.currencyCode}
																</>
															)}
														</td>
													</tr>
												</tbody>
												<tbody>
													<tr>
														<th>
															<span
																className="mb0"
																style={{ fontWeight: "700" }}
															>
																Amount Payable
															</span>
														</th>
														<td style={{ fontWeight: "700", color: "#1c1e1e" }}>
															{cartState.total} {cartState.currencyCode}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<Link
											to="/checkout"
											className="btn btn-primary btn-block"
											// style={{ marginTop: "115px" }}
										>
											Checkout
										</Link>
									</div>
								</div>
							</div>
							<div className="box mb30">
								<div className="box-head">
									<h3 className="head-title">Coupons &amp; Offers</h3>
								</div>
								<div className="box-body">
									<form>
										<div className="coupon-form">
											<input
												type="text"
												name="coupon_code"
												className="form-control"
												id="coupon_code"
												value=""
												placeholder="Coupon code"
											/>
											<input
												type="submit"
												className="btn btn-primary btn-block"
												name="apply_coupon"
												value="Apply coupon"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
