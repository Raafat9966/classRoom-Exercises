import { useState, useEffect } from "react";
import axios from "axios";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
