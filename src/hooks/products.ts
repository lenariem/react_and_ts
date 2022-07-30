import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
      }

    async function fetchProducts() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get<IProduct[]>(
                "https://fakestoreapi.com/products?limit=10"
            );

            setProducts(response.data);
            setLoading(false);
        } catch (e) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, error, loading, addProduct };
}
