import { useEffect } from "react";
import AddProductForm from "../../components/AddProductForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductById } from "../../redux/products/productActions";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { loading, products, success } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();

  useEffect(() => {
    if (params.id) dispatch(getProductById(params.id));
  }, [dispatch, params, success]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container">
      <div className="mt-10 mx-12 flex justify-center">
        <h1 className="text-4xl font-semibold text-slate-800">Edit Product</h1>
      </div>

      <AddProductForm isEditing={true} product={products[0]} />
    </div>
  );
};

export default EditProduct;
