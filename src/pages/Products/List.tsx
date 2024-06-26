import { Link } from "react-router-dom";

import ProductsTable from "../../components/ProductsTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/products/productActions";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, query } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getAllProducts(query));
  }, [dispatch, query]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

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
