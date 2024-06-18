import { Navigate, Outlet } from "react-router-dom"


const UnAuthLayout = ({user}:{user:boolean}) => {
  return user?<Navigate to="/"  />:<Outlet/>
}

export default UnAuthLayout
