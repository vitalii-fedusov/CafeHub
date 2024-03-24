import React from "react";
import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";

export const App: React.FC = () => {
  const location = useLocation();
  const login = location.pathname === "/login";
  const register = location.pathname === "/register";

  if (login) {
    return <LoginPage />;
  }

  if (register) {
    return <RegisterPage />;
  }

  return (
    <>
      <div className="page__container">
        {/* {login || register ? ( */}
        {/* <LoginPage /> */}
        {/* ) : ( */}
        {/* <> */}
        <div className="container">
          <Header />
          <main className="main page__main">
            <Outlet />
          </main>
        </div>
        <Footer />
        {/* </> */}
        {/* )} */}
      </div>
    </>
  );
};
