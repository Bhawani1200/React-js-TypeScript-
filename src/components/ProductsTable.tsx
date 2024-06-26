import { useDispatch, useSelector } from "react-redux";
import productsTableColumn from "../constants/productsTableColumn";
import { RootState } from "../redux/rootReducer";
import { deleteProduct } from "../redux/products/productActions";
import { AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import {
  resetSuccess,
  setSort,
  setFilters as setProductFilters,
} from "../redux/products/productSlice";
import Modal from "./Modal";
import ProductsTableLimit from "./ProductsTableLimit";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { error, success, products } = useSelector(
    (state: RootState) => state.product
  );

  const sortData = (sortKey: string) => {
    dispatch(setSort(sortKey));
  };

  const getFilteredData = () => {
    dispatch(setProductFilters(filters));
  };

  const onDeleteProduct = (product: Product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };

  const onConfirmDeleteProduct = () => {
    dispatch(deleteProduct(selectedProduct!.id));
    setSelectedProduct(null);
  };

  const onEditProduct = (id: string) => {
    navigate(`/products/edit/${id}`);
  };

  useEffect(() => {
    if (error)
      toast.error(error, {
        autoClose: 1000,
      });

    if (success) {
      toast.success(`Product ${success} successfully.`, {
        autoClose: 1000,
        onClose: () => dispatch(resetSuccess()),
      });
    }
  }, [error, success, dispatch]);

  return (
    <div className="flex">
      <ToastContainer />
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Delete Product"
        content={`Are you sure you want to delete ${selectedProduct?.name}?`}
        actions={
          <>
            <button
              className="bg-slate-500 px-5 py-1 rounded text-white"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 px-5 py-1 rounded text-white"
              onClick={onConfirmDeleteProduct}
            >
              Delete
            </button>
          </>
        }
      />
      <div className="w-1/6 py-10 px-5 border my-8 ml-10 border-gray-300 rounded-xl border-dashed box-border">
        <h3 className="font-semibold">Filters</h3>
        <div className="py-2">
          <input
            className="border px-2 rounded"
            type="text"
            id="name"
            placeholder="Filter by name"
            value={filters.name}
            onChange={(e) => setFilters({ name: e.target.value })}
          />
        </div>
        <div className="py-2">
          <input
            className="border px-2 rounded"
            type="text"
            id="brand"
            placeholder="Filter by brand"
            defaultValue={filters.brand}
            onChange={(e) => setFilters({ brand: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-slate-700 text-white rounded mt-10 py-1 px-6"
            onClick={getFilteredData}
          >
            Apply Filters
          </button>
        </div>
      </div>
      <div className="py-10 px-12 border my-8 mx-10 border-gray-300 rounded-xl border-dashed w-5/6">
        <table className="w-full">
          <thead>
            <tr>
              {productsTableColumn.map(({ label, key }, index) => (
                <th
                  key={index}
                  className="text-left pb-3 cursor-pointer"
                  onClick={() => sortData(key)}
                >
                  {label}
                </th>
              ))}
              <th className="text-center pb-3 cursor-pointer">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-dashed border-gray-300 last:border-b-0"
              >
                <td className="py-3">{index + 1}.</td>
                <td className="py-3">{product.name}</td>
                <td className="py-3">{product.brand}</td>
                <td className="py-3">{product.category ?? "-"}</td>
                <td className="py-3">{product.price}</td>
                <td className="py-3 text-center">
                  <button
                    className="p-2 bg-blue-500 rounded text-white mx-2"
                    onClick={() => onEditProduct(product.id)}
                  >
                    <FaPencil />
                  </button>
                  <button
                    className="p-2 bg-red-500 rounded text-white mx-2"
                    onClick={() => onDeleteProduct(product)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ProductsTableLimit />
      </div>
    </div>
  );
};

export default ProductsTable;
