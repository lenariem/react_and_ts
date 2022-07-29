import Product from './components/Product';
import {products} from "./data/products";



function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product products={products}/>
    </div>
  );
}

export default App;
