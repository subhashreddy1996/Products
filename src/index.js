import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./order";
import App from "./App";
import Menu from "./menu";
import Login from "./Login/Auth/Login";
import store from "./Login/store";

import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "./Login/Auth/Register";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Routes>
    </Router>
  </Provider>
);
