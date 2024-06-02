import React, { useEffect } from "react";
import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";
import { useAppDispatch } from "./app/hooks";
import { refreshToken } from "./features/auth/authSlice";

export const App: React.FC = () => {
  const location = useLocation();
  const login = location.pathname === "/login";
  const register = location.pathname === "/register";
  const dispatch = useAppDispatch();
  const refreshInterval = 2000 * 1000; // 2,000 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(refreshToken());
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [dispatch, refreshInterval]);

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
