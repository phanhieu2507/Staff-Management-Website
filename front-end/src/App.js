import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Home from './pages/Home/Home.js';
import Update from './pages/Update/Update.js';
import Add from './pages/Add/Add.js';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import Profile from './pages/Profile/Profile.js';
import IsLogin from './components/IsLogin.js';
import IsAdmin from './components/IsAdmin.js';
import OtherProfile from './pages/OtherProfile/OtherProfile.js';
import NotFound from './pages/404/NotFound.js';
import BackGround from './components/BackGround.js';
import Task from './pages/Task/index.js';
const App = () =>
{
  return (
    <div>
       
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
           <Route element={<IsLogin />}>
           <Route path='/home' element={<Home />} />
           <Route path='/profile' element={<Profile />} />
           <Route path='/otherprofile/:id' element={<OtherProfile />} />
           <Route path='/otherprofile/:id/tasks' element={<Task />} />
           <Route element={<IsAdmin />}>
             <Route path='/add' element={<Add />} />
             <Route path='/update/:id' element={<Update />} />
             <Route path='/push/:id' element={<Update />} />
          </Route>
        </Route>
      </Routes>

    </div>
  );

}
export default App;