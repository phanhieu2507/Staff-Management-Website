import { Navigate, Outlet } from "react-router-dom";


const IsLogin = () => {
 
  return localStorage.getItem('userData') ? <Outlet /> : <Navigate to="/login" />
};

export default IsLogin;