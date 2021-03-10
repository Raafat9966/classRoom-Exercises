import { useContext } from "react";
import ProductCard from "../ProductCard.js";
import ProductsContext from "../../context/ProductsContext.js";

function ProductsPage() {
	const { products } = useContext(ProductsContext);

	return (
		<>
			<h1>Products</h1>
			{products.map((product) => (
				<ProductCard key={product.articleNo} product={product} />
			))}
		</>
	);
}

export default ProductsPage;
