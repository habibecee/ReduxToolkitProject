import React from "react";
import BreadCrumb from "../../Companents/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../Assets/ZUiY.gif";

const Checkout = (props) => {
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

	const breadcrumb = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Cart",
			href: "/cart",
		},
		{
			title: "Checkout",
			href: "/Checkout",
		},
	];

	return (
		<>
			<BreadCrumb items={breadcrumb} />
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
							<div className="box checkout-form">
								<div className="box-head">
									<h2 className="head-title">Your Detail</h2>
								</div>
								<div className="box-body">
									<div className="row">
										<form>
											<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<div className="form-group">
													<label
														className="control-label sr-only"
														for="name"
													></label>
													<input
														name="name"
														type="text"
														className="form-control"
														placeholder="Enter Your First NAme"
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<div className="form-group">
													<label
														className="control-label sr-only"
														for="name"
													></label>
													<input
														id="name"
														name="name"
														type="text"
														className="form-control"
														placeholder="Enter Your last NAme"
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only" for="email">
														Email
													</label>
													<input
														id="email"
														name="email"
														type="text"
														className="form-control"
														placeholder="Enter Email Address"
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<div className="form-group">
													<label
														className="control-label sr-only"
														for="phone"
													></label>
													<input
														id="phone"
														name="phone"
														type="text"
														className="form-control"
														placeholder="Enter Mobile Number"
														required
													/>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only"> </label>
													<select
														name="country name"
														className="form-control"
														required
													>
														<option value="">TÜRKİYE</option>
														<option value="1">UNITED STATES OF AMERICA </option>
														<option value="2">UNITED KINGDOM</option>
													</select>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only"> </label>
													<select
														name="city name"
														className="form-control"
														required
													>
														<option value="">İSTANBUL</option>
														<option value="1">ANKARA</option>
														<option value="2">İZMİR</option>
														<option value="3">ANTALYA</option>
													</select>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only"></label>
													<input
														name="phone"
														type="text"
														className="form-control"
														placeholder="street Address"
														required
													/>
												</div>
											</div>

											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only"></label>
													<input
														name="postcode"
														type="text"
														className="form-control"
														placeholder="Enter Your zipcode"
														required
													/>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label
														className="control-label sr-only"
														for="textarea"
													></label>
													<textarea
														className="form-control"
														id="textarea"
														name="textarea"
														rows="4"
														placeholder="Notes About Your Order"
													></textarea>
												</div>
												<button className="btn btn-primary ">
													Procced to Payment
												</button>
												<div className="checkbox alignright mt20">
													<label>
														<input type="checkbox" value="" />
														<span>Create An Account?</span>
													</label>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="box mb30">
								<div className="box-head">
									<h3 className="head-title">Your Order</h3>
								</div>

								<div className="box-body">
									<div className="table-responsive">
										<div className="pay-amount">
											<table className="table mb20">
												<tbody>
													<tr>
														<th>
															<span>Amount Payable</span>
														</th>
														<td style={{ fontWeight: "700", color: "#1c1e1e" }}>
															{cartState.total} {cartState.currencyCode}
														</td>
													</tr>
												</tbody>
											</table>
											<a href="/cart" className="text-danger GoBack">
												Go Back To Cart
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="box-head">
									<h3 className="head-title">Check Payment</h3>
								</div>
								<div className="box-body">
									<p>
										Please send a check to Store Name, Store Street, Store Town,
										Store State / County, Store Postcode.
									</p>
									<button className="btn btn-default btn-block">
										Place Order
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
