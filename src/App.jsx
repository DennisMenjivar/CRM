import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Login from './layout/Login'
import EditClient from './pages/EditClient';
import LoginForm from './pages/LoginForm';
import NewClient from './pages/NewClient';
import Principal from './pages/Principal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}>
          <Route index element={<LoginForm/>}/>
        </Route>
        <Route path='/clients' element={<Layout/>}>
          <Route index element={<Principal/>}/>
          <Route path='newClient' element={<NewClient/>}/>
          <Route path='editClient/:id' element={<EditClient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
