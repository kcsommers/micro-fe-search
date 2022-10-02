import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/search';

import './index.scss';

// import Header from "layout/Header";

export const App = () => (
  <div className='flex flex-col min-h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
