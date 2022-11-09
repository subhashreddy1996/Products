import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import pic from "./menu5.jpg";
import pic1 from "./menu10.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import pic2 from "./menu7.jpg";
import pic3 from "./menu9.jpg";
import pic5 from "./menu14.jpg";
import pic4 from "./menu13.jpg";
import { Link } from "react-router-dom";
import About from "./Pages/about";
import styles from "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav } from "react-bootstrap";
// import NavbarOne from "./components/NavbarOne";
// import NavbarTwo from "./components/NavbarTwo";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp";
// import LogIn from "./pages/LogIn";

//create NAVBAR
// function myNavbar() {
//   return (
//     <>
//       {/* <NavbarOne /> */}
//       <NavbarTwo />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/services" component={Services} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/sign-up" component={SignUp} />
//         <Route path="/login" component={LogIn} />
//       </Switch>
//     </>
//   );
// }

//NAVBAR created
// //create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4"
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });
// //Styles created

//Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );
// //MyDocument Created

// //create function  for MyDownload
// function MyDownload() {
//   return (
//     <div className="MyDownload">
//       <PDFDownloadLink
//         document={<MyDocument />}
//         fileName="menu.pdf"
//         style={{
//           textDecoration: "none",
//           padding: "10px",
//           color: "#4a4a4a",
//           backgroundColor: "#f2f2f2",
//           border: "1px solid #4a4a4a"
//         }}
//       />
//     </div>
//   );
// }
//MyDownload() created.

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [pic, pic1, pic2, pic3]
    };
  }
  //onNavigateHome() {}
  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }
  componentDidMount() {
    setInterval(this.switchImage, 2000);
  }

  render() {
    //CREATE HEADER AND DISPLAY IMAGES
    function topLevel() {
      return (
        <div className="topLevel">
          {/* calling Navbar */}
          <Navbar />
          <h1 className="mainHeading">La Bella Cucina</h1>
          <div className="underline"></div>
          <h2 className="Left Cont1"> the beautiful kitchen</h2>
          <ul className="Left Cont">
            <li>
              <img src={pic} alt="chicken_combo" />
              <li style={{ listStyleType: "none" }}> Chicken combo</li>
            </li>
            <li>
              <img src={pic5} alt="Lamb_combo" />
              <li style={{ listStyleType: "none" }}> Lamb combo</li>
            </li>
            <li>
              <img src={pic2} alt="wings_combo" />

              <li style={{ listStyleType: "none" }}> Wings combo</li>
            </li>

            <li>
              <img src={pic1} alt="veg_combo" />
              <li style={{ listStyleType: "none" }}> Veg combo</li>
            </li>

            <li>
              <img src={pic3} alt="fries_combo" />
              <li style={{ listStyleType: "none" }}> Fries combo</li>
            </li>
            <li>
              <img src={pic4} alt="salad" />
              <li style={{ listStyleType: "none" }}> Salad</li>
            </li>
          </ul>
        </div>
      );
    }
    //HEADER and IMAGES DISPLAYED

    //create function for orderNow()
    // function orderNow() {
    //   return (
    //     <div className="orderNow">
    //       <li>
    //         <Link to={"/order"}>
    //           <button class="btn pageBtn">Order Now</button>
    //         </Link>
    //       </li>
    //     </div>
    //   );
    // }
    //orderNow() created.

    // create function for Menu Download
    // function Login() {
    //   return (
    //     <div className="Login">
    //       <li>
    //         {" "}
    //         <Link to={"/login"}>
    //           <button class="btn pageDwn"> Register/Login</button>{" "}
    //         </Link>
    //       </li>
    //     </div>
    //   );
    // }
    //Menu() created.

    //create function for Slideshow

    //function slideImage(){
    //return();
    //}
    //

    return (
      <div className="App">
        {topLevel()}

        <div className="slideshow-container">
          <img
            src={this.state.images[this.state.currentImage]}
            alt="Choose any combo "
          />
        </div>
      </div>
    );
  }
}
