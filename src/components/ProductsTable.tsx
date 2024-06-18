import productsTableColumn from "../constants/ProductsTableColumn";

type ProductsTableType = {
  data: {
    name: string;
    category?: string;
    brand: string;
    price: number;
  }[];
};

const ProductsTable = ({ data }: ProductsTableType) => {
  return (
    <div className="py-10 px-12 border my-8 mx-10 border-gray-300 rounded-xl border-dashed">
      <table className="w-full">
        <thead>
          <tr>
            {productsTableColumn.map((tableHead, index) => (
              <th key={index} className="text-left pb-3">
                {tableHead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
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
    </div>
  );
};

export default ProductsTable;
