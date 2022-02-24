import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Stock from './pages/Stock'
import Trade from './pages/Trade'
import AllAssets from './pages/AllAssets'

import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
          
        <Route exact path="all-assets" element={<AllAssets />} />

        <Route exact path="stock" element={<Crypto />} />
          
        <Route exact path="crypto" element={<Stock />} />
          
        <Route exact path="trade" element={<Trade />} />
      </Route>
    </Routes>
  );
}

export default App;
