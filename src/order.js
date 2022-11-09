import "./styles.css";
import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function Order() {
  return (
    <Link to={"/"}>
      <button class="btn pageBtn homeBtn">Home Page</button>
      {""}
    </Link>
  );
}
