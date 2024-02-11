import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';

export const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};
