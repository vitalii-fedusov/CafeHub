import React from 'react';
import {
  Navigate,
  Route,
  Routes,
  HashRouter as Router,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './Pages/Home/Home';
import ScrollToTop from './helpers/ScrollToTop';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { CafeDetails } from './Pages/CafeDetails/CafeDetails';

export const Root = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" />} />
        <Route index element={<Home />} />
        <Route path="/:cafeName" element={<CafeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
