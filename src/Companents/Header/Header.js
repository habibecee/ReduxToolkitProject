import React from "react";

const Header = () => {
	return (
		<>
			<div className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-6 hidden-xs">
							<p className="top-text">Flexible Delivery, Fast Delivery.</p>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
							<ul>
								<li>+180-123-4567</li>
								<li>info@demo.com</li>
								<li>
									<a href="/">Help</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="logo">
								<a href="/">
									<img src="/images/logo.png" alt="" />
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
									<li>
										<a href="/cart" className="title">
											<i className="fa fa-shopping-cart"></i>
											<sup className="cart-quantity"></sup>
										</a>
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
												<li>
													<a href="/category/categoryOne">Category 1</a>
												</li>
												<li>
													<a href="/category/categoryTwo">Category 2</a>
												</li>
											</ul>
										</li>
										<li className="has-sub">
											<a href="/mobiles">Mobiles</a>
											<ul>
												<li>
													<a href="/mobiles/one">Mobile List </a>
												</li>
												<li>
													<a href="/mobiles/two">Mobile Single</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="/">About</a>
										</li>
										<li className="has-sub">
											<a href="#">Pages</a>
											<ul>
												<li>
													<a href="/">Checkout Form</a>
												</li>
												<li>
													<a href="/cart">Cart</a>
												</li>
												<li>
													<a href="/auth/login">Login</a>
												</li>
												<li>
													<a href="/auth/register">Register</a>
												</li>
												<li>
													<a href="/">404-page</a>
												</li>
												<li>
													<a href="/">styleguide</a>
												</li>
											</ul>
										</li>
										<li className="has-sub">
											<a href="#">Blog</a>
											<ul>
												<li>
													<a href="/">Blog Default</a>
												</li>
												<li>
													<a href="/">Blog Single</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="/">Contact Us</a>
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
