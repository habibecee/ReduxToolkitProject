import { useParams } from "react-router-dom";
import BreadCrumb from "../../Companents/BreadCrumb/BreadCrumb";
import SideBarSearch from "../../Companents/SideBar-Search/SideBarSearch";
import ProductList from "./Companents/Product-List/ProductList";
import useApi from "../../Hooks/useApi";
import { useEffect, useState } from "react";

const Category = (props) => {
	const params = useParams();
	console.log("CATEGORY PAGE PARAMS", params);
	const api = useApi();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const urlQueryData = {};
		urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
		urlQueryData["order[code]"] = "asc";
		urlQueryData["order[createdAt]"] = "asc";

		// console.log("URL QUERY DATA", urlQueryData);

		api
			.get("shop/products", { params: urlQueryData })
			.then((response) => {
				// console.log("PRODUCTS RESPONSE", response);
				setProducts(response.data);
			})
			.catch((err) => console.log("PRODUCTS ERROR", err));
	}, []);

	const breadcrumb = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Category",
			href: "/category",
		},
		{
			title: params.taxon_code,
			href: "/category/" + params.taxon_code,
		},
	];
	return (
		<>
			<BreadCrumb items={breadcrumb} />
			<div className="content">
				<div className="container">
					<div className="row">
						<SideBarSearch />

						<ProductList products={products} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
