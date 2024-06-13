import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/about/About';
import History from './pages/about/History';
import Organization from './pages/about/Organization';
import Product from './pages/product/Product';
import InfusionSets from './pages/product/InfusionSets';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/organization" element={<Organization />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/infusion-sets" element={<InfusionSets />} />
      </Route>
    </Routes>
  );
}

export default App;
