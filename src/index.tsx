import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Root } from "./Root";
import { store } from "./app/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Auth0Provider
        domain="dev-fuhleyor542atmw3.us.auth0.com"
        clientId="4CkGRVRs1GbiRQFFiQhuwwjK83Hcz2G7"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      > */}
      <Root />
      {/* </Auth0Provider> */}
    </Provider>
  </React.StrictMode>
);
