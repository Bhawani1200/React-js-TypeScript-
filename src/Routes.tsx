import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import AddProduct from "./pages/Products/Add";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./pages/Products/List";
import AuthLayout from "./layouts/AuthLayout";
import { UnAuthLayout } from "./layouts/UnAuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProduct from "./pages/Products/Edit";

const Routes = ({ user }: { user: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout user={user} />}>
        <Route element={<UnAuthLayout user={user} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
