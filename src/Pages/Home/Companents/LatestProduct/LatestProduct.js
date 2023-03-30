import React, { useEffect } from "react";

const LatestProduct = (props) => {
	useEffect(() => {
		window.$(".owl-two").owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 3000,
			Item_Width: 100,
			nav: true,
			navText: [
				'<i className="fa fa-angle-left"></i>',
				'<i className="fa fa-angle-right "></i>',
			],
			responsive: {
				0: {
					items: 4,
				},
				600: {
					items: 4,
				},
				1000: {
					items: 4,
				},
				1200: {
					items: 4,
				},
				1400: {
					items: 4,
				},
				1600: {
					items: 4,
				},
				1800: {
					items: 4,
				},
			},
		});
	}, []);

	return (
		<>
			{/* Latest Product */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="box">
							<div className="box-head">
								<h3 className="head-title">Latest Product</h3>
							</div>
							<div className="box-body">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_1.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Google Pixel <strong>(128GB, Black)</strong>
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
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_2.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														HTC U Ultra <strong>(64GB, Blue)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1200
													</a>
													<a href="#" className="discounted-price">
														$1700
													</a>
													<span className="offer-price">10%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_3.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Samsung Galaxy Note 8
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1500
													</a>
													<a href="#" className="discounted-price">
														$2000
													</a>
													<span className="offer-price">40%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_4.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Vivo V5 Plus <strong>(Matte Black)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1500
													</a>
													<a href="#" className="discounted-price">
														$2000
													</a>
													<span className="offer-price">15%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* BEST SELLER PRODUCT  */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="box">
							<div className="box-head">
								<h3 className="head-title">Best Seller Product</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="product-carousel">
					<div className="box-body">
						<div className="row">
							<div className="owl-carousel owl-two owl-theme">
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_5.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 6 <strong>(32 GB, Gold)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1700
													</a>
													<a href="#" className="discounted-price">
														$2000
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_6.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 7 <strong>(256 GB, Black)</strong>{" "}
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1400
													</a>
													<a href="#" className="discounted-price">
														<strike>$1800</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_7.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 6S <strong>(32GB, Gold)</strong>{" "}
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1300
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_8.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone X <strong>(64 GB, Grey)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1200
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_3.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 6 <strong>(32 GB, Gold)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1700
													</a>
													<a href="#" className="discounted-price">
														$2000
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_1.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 7 <strong>(256 GB, Black)</strong>{" "}
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1400
													</a>
													<a href="#" className="discounted-price">
														<strike>$1800</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_7.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone 6S <strong>(32GB, Gold)</strong>{" "}
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1300
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_2.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Apple iPhone X <strong>(64 GB, Grey)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1200
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Featured Product */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="box">
							<div className="box-head">
								<h3 className="head-title">Featured Product</h3>
							</div>
							<div className="box-body">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_3.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Samsung Galaxy Note 8
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1500
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">40%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_4.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Vivo V5 Plus <strong>(Matte Black)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1500
													</a>
													<a href="#" className="discounted-price">
														<strike>$2000</strike>
													</a>
													<span className="offer-price">15%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_1.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														Google Pixel <strong>(128GB, Black)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1100
													</a>
													<a href="#" className="discounted-price">
														<strike>$1400</strike>
													</a>
													<span className="offer-price">20%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="product-block">
											<div className="product-img">
												<img src="/images/product_img_2.png" alt="" />
											</div>
											<div className="product-content">
												<h5>
													<a href="#" className="product-title">
														HTC U Ultra <strong>(64GB, Blue)</strong>
													</a>
												</h5>
												<div className="product-meta">
													<a href="#" className="product-price">
														$1200
													</a>
													<a href="#" className="discounted-price">
														<strike>$1700</strike>
													</a>
													<span className="offer-price">10%off</span>
												</div>
												<div className="shopping-btn">
													<a href="#" className="product-btn btn-cart">
														<i className="fa fa-shopping-cart"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Subscribe */}

			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="newsletter-wrapper">
							<div className="row">
								<div className="col-lg-offset-5 col-lg-6 col-md-offset-5 col-md-6 col-sm-offset-5 col-sm-6 col-xs-12">
									<div className="newsletter-form">
										<h1>
											Subscribe To <strong>Get Discount &amp; Offers</strong>
										</h1>
										<div className="input-group">
											<input
												type="text"
												className="form-control"
												placeholder="Search for..."
											/>
											<span className="input-group-btn">
												<button type="button" className="btn btn-primary">
													Subscribe
												</button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Safe Payment */}

			<div className="bg-default pdt40 pdb40">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="feature-left">
								<div className="feature-outline-icon">
									<i className="fa fa-credit-card"></i>
								</div>
								<div className="feature-content">
									<h3 className="text-white">Safe Payment</h3>
									<p>
										Praesent orci dolor, pretium vitae hendrerit convallisutes
										orcgravida bibendum.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="feature-left">
								<div className="feature-outline-icon">
									<i className="fa fa-users"></i>
								</div>
								<div className="feature-content">
									<h3 className="text-white">24/7 Help Center</h3>
									<p>
										Aliquam molestie urnased one pharetra vestibulum Interdum et
										malesuada fames.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="feature-left feature-circle">
								<div className="feature-outline-icon">
									<i className="fa fa-rotate-left "></i>
								</div>
								<div className="feature-content">
									<h3 className="text-white">Free &amp; Easy Return</h3>
									<p>
										Vivamus semper nisnesbla accumsan dui justo esw finibus
										turpis serom.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="feature-left">
								<div className="feature-outline-icon">
									<i className="fa fa-dollar"></i>
								</div>
								<div className="feature-content">
									<h3 className="text-white">Great Value</h3>
									<p>
										Morbi necmi turpiulm tristiq ueipsm inodiopharetr amal esuat
										erdumetalesuada.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestProduct;
