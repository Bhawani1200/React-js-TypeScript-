import { useDispatch, useSelector } from "react-redux";
import productsTableColumn from "../constants/ProductsTableColumn";
import { RootState } from "../redux/rootReducer";
import { getAllProducts } from "../redux/products/productActions";
import { AppDispatch } from "../redux/store";
import { useState } from "react";
import { productQuery } from "../types/product";
const ProductsTable = () => {
  const [sortOrder, setSortOrder] = useState(true);
  const [limit,setLimit]=useState(0);
  const [query,setQuery]=useState<productQuery>({})
  const dispatch = useDispatch<AppDispatch>();
  const { loading, products, error } = useSelector(
    (state: RootState) => state.product
  );
  const sortData = (sortKey: string) => {
    const sort= { [sortKey]: sortOrder ? -1 : 1 } as {[key:string]:1 | -1}
    dispatch(getAllProducts({ sort }));
    setSortOrder(!sortOrder);
    setQuery({ ...query,sort })
  };
  const getLimitedData=(e)=>{
    const limit=e.target.value;
    dispatch(getAllProducts({limit}))
    setLimit(e.target.value);
    setQuery({ ...query,limit })
  }
  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  return (
    <div className="py-10 px-12 border my-8 mx-10 border-gray-300 rounded-xl border-dashed">
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
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10 text-right">
        <label htmlFor="limit">Limit</label>
        <select name="limit" id="limit" className="border" onChange={getLimitedData}>
        <option value="10" selected={limit==10}>10</option>
        <option value="20" selected={limit==20}>20</option>
        <option value="30" selected={limit==30}>30</option>
        <option value="50" selected={limit==40}>50</option>
        <option value="100"selected={limit==100}>100</option>
        </select>
      </div>
    </div>
  );
};
export default ProductsTable;
