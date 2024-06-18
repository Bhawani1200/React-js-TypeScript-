import { Link } from "react-router-dom";

import ProductsTable from "../../components/ProductsTable";
import products from "../../data/products.json";

const ProductList = () => {
  return (
    <div className="container">
      <div className="mt-10 mx-12 flex justify-between">
        <h1 className="text-4xl font-semibold text-slate-800">Product List</h1>
        <div className="bg-slate-100 px-5 py-2 text-slate-800 rounded-md">
          <Link to="/products/add">Add Product +</Link>
        </div>
      </div>

      <ProductsTable data={products} />
    </div>
  );
};

export default ProductList;