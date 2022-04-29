import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Login from './layout/Login';
import Contacts from './pages/Contacts';
import EditContact from './pages/EditContact';
import LoginForm from './pages/LoginForm';
import NewContact from './pages/NewContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="/contacts" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="newContact" element={<NewContact />} />
          <Route path="editContact/:id" element={<EditContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
