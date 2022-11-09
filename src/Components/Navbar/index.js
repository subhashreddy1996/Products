import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import styles from "../../styles.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import { Button } from "bootstrap";

const Navbar = () => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
  //MyDocument Created

  //create function  for MyDownload
  function MyDownload() {
    return (
      <div className="MyDownload">
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="menu.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          Download Menu
        </PDFDownloadLink>
      </div>
    );
  }
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Order now
          </NavLink>
          {MyDownload()}
          {/* <NavBtn>
            <Button onClick={MyDownload()}>Download Menu</Button>
          </NavBtn> */}
          {/* <NavLink to={MyDownload()} activeStyle>
            Download Menu
          </NavLink> */}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
