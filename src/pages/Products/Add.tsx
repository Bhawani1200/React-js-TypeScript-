import AddProductForm from "../../components/AddProductForm";

const AddProduct = () => {
  return (
    <div className="container">
      <div className="mt-10 mx-12 flex justify-center">
        <h1 className="text-4xl font-semibold text-slate-800">Add Product</h1>
      </div>

      <AddProductForm />
    </div>
  );
};

export default AddProduct;
