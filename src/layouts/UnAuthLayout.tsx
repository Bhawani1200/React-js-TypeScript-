import { Navigate, Outlet } from "react-router-dom";

export const UnAuthLayout = ({ user }: { user: boolean }) => {
  return user ? <Navigate to="/" /> : <Outlet />;
};
