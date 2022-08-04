import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Home from './pages/Home/Home.js';
import Update from './pages/Update/Update.js';
import Add from './pages/Add/Add.js';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
const App = () =>
{

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<Add />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/push/:id' element={<Update />} />
      </Routes>
    </div>
  );

}
export default App;