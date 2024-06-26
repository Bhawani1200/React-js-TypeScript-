import { useDispatch, useSelector } from "react-redux";
import { setLimit } from "../redux/products/productSlice";
import { AppDispatch, RootState } from "../redux/store";

const ProductsTableLimit = () => {
  const { query } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch<AppDispatch>();

  const getLimitedData = (limit: number) => {
    dispatch(setLimit(limit));
  };

  return (
    <div className="mt-10 text-right">
      <label htmlFor="limit" className="mr-3">
        Limit
      </label>
      <select
        name="limit"
        id="limit"
        className="border"
        value={query.limit}
        onChange={(e) => getLimitedData(parseInt(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default ProductsTableLimit;
