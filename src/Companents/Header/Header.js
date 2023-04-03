import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../Redux/AuthSlice";
import { Link } from "react-router-dom";

const Header = (props) => {
	const authState = useSelector((state) => state.authState);
	const categoryState = useSelector((state) => state.categoryState);
	const cartState = useSelector((state) => state.cartState);
	const dispatch = useDispatch();
	return (
		<>
			<div className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-6 hidden-xs">
							<p className="top-text">Flexible Delivery, Fast Delivery.</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<ul>
								<li>+180-123-4567</li>
								<li>info@demo.com</li>
								{/* <li>
									<a href="/">Help</a>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
							<div className="logo" style={{ width: "30%", height: "30%" }}>
								<a href="/">
									<img src="/images/logo6.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 ">
							<div className="search-bg">
								<input
									type="text"
									className="form-control"
									placeholder="SEARCH HERE"
								/>
								<button type="Submit">
									<i className="fa fa-search"></i>
								</button>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="account-section">
								<ul>
									{authState.token ? (
										<>
											<li>
												<a href="#" className="title hidden-xs">
													My Account{" "}
													<strong className="text-info">
														{" "}
														{authState.customerId}{" "}
													</strong>
												</a>
											</li>
											<li className="hidden-xs">|</li>
											<li>
												<a
													href="/"
													onClick={(event) => dispatch(removeToken())}
													className="title hidden-xs"
												>
													Logout
												</a>
											</li>
										</>
									) : (
										<>
											<li>
												<a href="/auth/login" className="title hidden-xs">
													Login
												</a>
											</li>
											<li className="hidden-xs">|</li>
											<li>
												<a href="/auth/register" className="title hidden-xs">
													Register
												</a>
											</li>
										</>
									)}

									<li>
										<Link to="/cart" className="title">
											<i className="fa fa-shopping-cart"> </i>
											<sup
												className="cart-quantity"
												style={{
													borderRadius: "50%",
													marginLeft: "3px",
												}}
											>
												{cartState.items.length}
											</sup>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="navigation">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div id="navigation">
									<ul>
										<li className="active">
											<a href="/">Home</a>
										</li>
										<li className="has-sub">
											<a href="/category/test">Categories</a>
											<ul>
												{categoryState.categories?.map((category, index) => {
													return (
														<li key={index}>
															<a href={"/category/" + category.code}>
																{category.name}{" "}
															</a>
														</li>
													);
												})}
											</ul>
										</li>
										{/* <li className="has-sub">
											<a href="/mobiles">Mobiles</a>
											<ul>
												<li>
													<a href="/mobiles/one">Mobile List </a>
												</li>
												<li>
													<a href="/mobiles/two">Mobile Single</a>
												</li>
											</ul>
										</li> */}
										{/* <li>
											<a href="/">About</a>
										</li> */}
										<li className="has-sub">
											<a href="#">Pages</a>
											<ul>
												<li>
													<a href="/auth/login">Login</a>
												</li>
												<li>
													<a href="/auth/register">Register</a>
												</li>

												<li>
													<a href="/cart">Cart</a>
												</li>
												<li>
													<a href="#checkout-form">Checkout Form</a>
												</li>

												{/* <li>
													<a href="/">404-page</a>
												</li>
												<li>
													<a href="/">styleguide</a>
												</li> */}
											</ul>
										</li>
										{/* <li className="has-sub">
											<a href="#">Blog</a>
											<ul>
												<li>
													<a href="/">Blog Default</a>
												</li>
												<li>
													<a href="/">Blog Single</a>
												</li>
											</ul>
										</li> */}
										<li>
											<a href="#connect-with-us">Contact Us</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
