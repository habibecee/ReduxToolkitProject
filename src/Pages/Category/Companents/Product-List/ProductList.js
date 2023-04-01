import React from "react";
import ProductItem from "../Product-Item/ProductItem";

const ProductList = (props) => {
	console.log("PRODUCTS LIST PROPS", props.products);

	const productCompanents = [];

	props.products?.map((item, index) => {
		productCompanents.push(<ProductItem key={index} product={item} />);
	});

	// for (let i = 0; i < 5; i++) {
	// 	productCompanents.push(<ProductItem key={i} />);
	// }

	return (
		<div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
					<form>
						<div className="select-option form-group">
							<select name="select" className="form-control">
								<option value="">Select</option>
								<option value="">Best Match</option>
								<option value="">Low Price</option>
								<option value="">High Price</option>
							</select>
						</div>
					</form>
				</div>
			</div>
			<div className="row">{productCompanents}</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="st-pagination">
						<ul className="pagination">
							<li>
								<a href="#" aria-label="previous">
									<span aria-hidden="true">Previous</span>
								</a>{" "}
							</li>
							<li className="active">
								<a href="#">1</a>
							</li>
							<li>
								<a href="#">2</a>
							</li>
							<li>
								<a href="#">3</a>
							</li>
							<li>
								{" "}
								<a href="#" aria-label="Next">
									<span aria-hidden="true">Next</span>
								</a>{" "}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
