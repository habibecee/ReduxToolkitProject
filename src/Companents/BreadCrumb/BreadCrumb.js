import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
	console.log("Breadcrumb Props:", props);
	return (
		<div className="page-header">
			<div className="container">
				<div className="row ">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="page-breadcrumb">
							<ol className="breadcrumb">
								{props.items?.map((item, index) => {
									return (
										<li key={index}>
											<Link to={item?.href}>{item?.title}</Link>
										</li>
									);
								})}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
