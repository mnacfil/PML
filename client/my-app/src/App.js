import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page for all order
// page for stats (toppings etc.)

import Home from './pages/Home';
import Orders from './pages/Orders';
import Stats from './pages/Stats';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path={'orders'} element={<Orders />}/>
          <Route path={'stats'} element={<Stats />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
