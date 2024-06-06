import React from 'react';
import Header from "./components/header";
import HomePage from "./pages/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
