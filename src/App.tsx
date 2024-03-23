import React from "react";
import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

export const App: React.FC = () => {
  const location = useLocation();
  const condition
  = location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      <div className="page__container">
        {condition ? (
          <LoginPage />
        ) : (
          <>
            <div className="container">
              <Header />
              <main className="main page__main">
                <Outlet />
              </main>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};
