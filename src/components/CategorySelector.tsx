import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/categories/categoryActions";
import { AppDispatch, RootState } from "../redux/store";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Product } from "../types/product";

type CategorySelectorType = {
  register: UseFormRegister<Product>;
  errors: FieldErrors<Product>;
};

const CategorySelector = ({ register, errors }: CategorySelectorType) => {
  const { loading, categories } = useSelector(
    (state: RootState) => state.category
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-2">
      <label htmlFor="category" className="ml-2 text-sm font-semibold">
        Category
      </label>
      <select
        id="category"
        defaultValue=""
        className="w-full border rounded-md py-2 px-3 mt-3 capitalize mb-2"
        {...register("category", {
          required: "Product categories is required.",
        })}
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
      <p className="text-red-500 text-sm m-2">{errors.category?.message}</p>
    </div>
  );
};

export default CategorySelector;
