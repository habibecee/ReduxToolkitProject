import { useParams } from "react-router-dom";
import BreadCrumb from "../../Companents/BreadCrumb/BreadCrumb";
import SideBarSearch from "../../Companents/SideBar-Search/SideBarSearch";
import ProductList from "./Companents/Product-List/ProductList";

const Category = (props) => {
	const params = useParams();

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
			title: params.slug,
			href: "/category/" + params.slug,
		},
	];
	return (
		<>
			<BreadCrumb items={breadcrumb} />
			<div className="content">
				<div className="container">
					<div className="row">
						<SideBarSearch />

						<ProductList />
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
