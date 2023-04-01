import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../Companents/BreadCrumb/BreadCrumb";
import useApi from "../../Hooks/useApi";
import { setToken } from "../../Redux/AuthSlice";

const Login = (props) => {
	const params = useParams();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const api = useApi();
	const dispatch = useDispatch();

	const breadcrumb = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Login",
			href: "/login",
		},
	];

	const onLogin = (event) => {
		event.preventDefault();
		const postData = { email, password };
		api
			.post("/shop/authentication-token", postData)
			.then((response) => {
				console.log("RESPONSE", response);

				const customerId = response.data.customer.replace(
					"api/v2/shop/customers/",
					""
				);

				dispatch(
					setToken({
						token: response.data.token,
						customerId,
					})
				);

				document.location.replace("/");
			})
			.catch((err) => {
				console.log("ERROR", err);
				alert("An error occured" + err);
			});
	};

	return (
		<>
			<BreadCrumb items={breadcrumb} />
			<div className="content">
				<div className="container">
					<div className="box">
						<div className="row">
							<div className="col-lg-offset-1 col-lg-6 col-md-offset-1 col-md-6 col-sm-12 col-xs-12 ">
								<div className="box-body">
									<div className="row">
										<div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
											<h3 className="mb10">Login</h3>
										</div>
										<form onSubmit={onLogin}>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label
														className="control-label sr-only"
														htmlFor="email"
													></label>
													<div className="login-input">
														<input
															// id="email"
															// name="emaol"
															type="text"
															className="form-control"
															placeholder="Enter your email id"
															onChange={(event) => setEmail(event.target.value)}
															required
														/>
														<div className="login-icon">
															<i className="fa fa-user"></i>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
													<label className="control-label sr-only"></label>
													<div className="login-input">
														<input
															name="password"
															type="password"
															className="form-control"
															placeholder="Password"
															onChange={(event) =>
																setPassword(event.target.value)
															}
															required
														/>
														<div className="login-icon">
															<i className="fa fa-lock"></i>
														</div>
														<div className="eye-icon">
															<i className="fa fa-eye"></i>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
												<button className="btn btn-primary btn-block mb10">
													Login
												</button>
												<div>
													<p>
														Don't you have an Account?{" "}
														<a href="/auth/Register">Register</a>
													</p>
												</div>
											</div>
										</form>

										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
											<h4 className="mb20">Login With</h4>
											<div className="social-media">
												<a
													href="www.facebook.com"
													className="btn-social-rectangle btn-facebook"
												>
													<i className="fa fa-facebook"></i>
													<span className="social-text">Facebook</span>
												</a>
												<a
													href="www.twitter.com"
													className="btn-social-rectangle btn-twitter"
												>
													<i className="fa fa-twitter"></i>
													<span className="social-text">Twitter</span>{" "}
												</a>
												<a
													href="www.google.com"
													className="btn-social-rectangle btn-googleplus"
												>
													<i className="fa fa-google-plus"></i>
													<span className="social-text">Google Plus</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
								<div className="box-body">
									<div className="feature-left">
										<div className="feature-icon">
											<img src="/images/feature_icon_1.png" alt="" />
										</div>
										<div className="feature-content">
											<h4>Loyalty Points</h4>
											<p>
												Aenean lacinia dictum risvitae pulvinar disamer
												seronorem ipusm dolor sit manert.
											</p>
										</div>
									</div>
									<div className="feature-left">
										<div className="feature-icon">
											<img src="/images/feature_icon_2.png" alt="" />
										</div>
										<div className="feature-content">
											<h4>Instant Checkout</h4>
											<p>
												Aenean lacinia dictum risvitae pulvinar disamer
												seronorem ipusm dolor sit manert.
											</p>
										</div>
									</div>
									<div className="feature-left">
										<div className="feature-icon">
											<img src="/images/feature_icon_3.png" alt="" />
										</div>
										<div className="feature-content">
											<h4>Exculsive Offers</h4>
											<p>
												Aenean lacinia dictum risvitae pulvinar disamer
												seronorem ipusm dolor sit manert.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
