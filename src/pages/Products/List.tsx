import { Link } from "react-router-dom";
import ProductsTable from "../../components/ProductsTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/products/productActions";
const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="mt-10 mx-12 flex justify-between">
        <h1 className="text-4xl font-semibold text-slate-800">Product List</h1>
        <div className="bg-slate-100 px-5 py-2 text-slate-800 rounded-md">
          <Link to="/products/add">Add Product +</Link>
        </div>
      </div>

      <ProductsTable />
    </div>
  );
};

export default ProductList;
