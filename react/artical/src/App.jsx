import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/page/login';
import Layout from '@/page/layout'
import { } from 'antd'
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={< Layout />}></Route >
          <Route path='/login' element={< Login />}></Route >
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;