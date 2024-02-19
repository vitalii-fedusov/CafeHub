import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <>
      <div className="page__container">
        <div className="container">
          <Header />
          <main className="main">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
