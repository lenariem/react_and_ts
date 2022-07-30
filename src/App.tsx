import { useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import ErrorMsg from "./components/ErrorMsg";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
    const { products, loading, error, addProduct } = useProducts();
    const [modal, setModal] = useState(true);

    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    };

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMsg error={error} />}
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}

            {modal && (
                <Modal
                    title="Create new product"
                    onClose={() => setModal(false)}
                >
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            )}

            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-xl px-4 py-2"
                onClick={() => setModal(prev => !prev)}
            >
                {modal ? "Close" : "Add new Product"}
            </button>
        </div>
    );
}

export default App;
