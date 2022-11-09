import "./styles.css";
import React from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function Menu() {
  return (
    <Link to={"/"}>
      <button class="btn pageBtn homeBtn">Download Menu</button>
    </Link>
  );
}
