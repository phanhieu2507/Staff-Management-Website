import { Navigate, Outlet } from "react-router-dom";

const getUserRole = () => {
    const role=JSON.parse(localStorage.getItem('userData'));
    if(role.user.role.role_name==='ADMIN')
    return true;
    else return false;  
}
const IsAdmin = () => {
     const admin = getUserRole();
  return admin ? <Outlet /> : <Navigate to="/home" />
};

export default IsAdmin;