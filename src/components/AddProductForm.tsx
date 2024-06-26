import { useForm } from "react-hook-form";
import { Product } from "../types/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { createProduct, updateProduct } from "../redux/products/productActions";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CategorySelector from "./CategorySelector";

type AddProductFormType = {
  isEditing?: boolean;
  product?: Product;
};

const AddProductForm = ({ isEditing = false, product }: AddProductFormType) => {
  const { register, handleSubmit, formState } = useForm<Product>({
    defaultValues: product,
  });

  const { errors } = formState;

  const { error, success } = useSelector((state: RootState) => state.product);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const addProduct = async (data: Product) => {
    dispatch(createProduct(data));
  };

  const editProduct = async (data: Product) => {
    dispatch(updateProduct(data));
  };

  useEffect(() => {
    if (success) {
      navigate("/products");
    }

    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }
  }, [error, success, navigate]);

  return (
    <div className="flex justify-center my-10">
      <div className="w-3/5 border px-10 py-8 rounded-xl border-dashed">
        <form onSubmit={handleSubmit(isEditing ? editProduct : addProduct)}>
          <div className="py-2">
            <label htmlFor="name" className="ml-2 text-sm font-semibold">
              Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 mt-3"
              type="text"
              id="name"
              {...register("name", {
                required: "Product name is required.",
              })}
            />
            <p className="text-red-500 text-sm m-2">{errors.name?.message}</p>
          </div>
          <div className="py-2">
            <label htmlFor="brand" className="ml-2 text-sm font-semibold">
              Brand
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 mt-3"
              type="text"
              id="brand"
              {...register("brand", {
                required: "Product brand is required.",
              })}
            />
            <p className="text-red-500 text-sm m-2">{errors.brand?.message}</p>
          </div>
          <CategorySelector register={register} errors={errors} />
          <div className="py-2">
            <label htmlFor="price" className="ml-2 text-sm font-semibold">
              Price
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 mt-3"
              type="number"
              id="price"
              {...register("price", {
                required: "Product price is required.",
              })}
            />
            <p className="text-red-500 text-sm m-2">{errors.price?.message}</p>
          </div>
          <div className="py-5 text-center">
            <input
              className="py-2 px-8 mt-3 bg-slate-700 rounded text-white cursor-pointer"
              type="submit"
              value={isEditing ? "Edit Product" : "Add Product"}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductForm;
