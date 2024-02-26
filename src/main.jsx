import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { GlobalStyle } from "./styles";
import "./utils/i18n";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/taka-app">
      <GlobalStyle />
      <App />
      <ToastContainer autoClose={3000} position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
