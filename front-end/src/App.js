import Login from './pages/Login.js';
import Register from './pages/Register.js';
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
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );

}
export default App;

