import React from 'react';
import 'kc_components/global-styles';
import { BaseTheme } from 'kc_components/theme';
import { Layout } from 'kc_components/ui/Layout';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { SearchPage } from './pages/search';

const App = () => (
  <BaseTheme>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </BaseTheme>
);
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
