import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
// import Main from '../pages/main/Main';
// import About from '../pages/about/About';
// import History from '../pages/about/History';
// import Organization from '../pages/about/Organization';
import Product from '../pages/product/Product';
// import InfusionSets from '../pages/product/InfusionSets';
import Anydana from '../pages/product/Anydana';
import DanaRs from '../pages/product/DanaRs';
import DanaR from '../pages/product/DanaR';
import DanaIIs from '../pages/product/DanaIIs';
import Privacy from '../pages/privacy/Privacy';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />
        <Route path="/dana-rs" element={<DanaRs />} />
        <Route path="/dana-r" element={<DanaR />} />
        <Route path="/dana-iis" element={<DanaIIs />} />
        <Route path="/anydana" element={<Anydana />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route index element={<Main />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/about/history" element={<History />} /> */}
        {/* <Route path="/about/organization" element={<Organization />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/product/anydana-application" element={<Anydana />} /> */}
        {/* <Route path="/product/infusion-sets" element={<InfusionSets />} /> */}
      </Route>
    </Routes>
  );
}
