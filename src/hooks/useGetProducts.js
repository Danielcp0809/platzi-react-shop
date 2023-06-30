import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

	useEffect(async () => {
		await getProducts();
	}, [])

	const getProducts = async () => {
		try {
			const response = await axios.get(API)
			setProducts(response.data);
		} catch (error) {
			console.error(error);
		}
	}

    return products
};

export default useGetProducts