import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddMember from './components/AddMember';
import EditMember from './components/EditMember';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/edit/:id" element={<EditMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
