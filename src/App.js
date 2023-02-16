import React, { Component } from "react";
import Carousel from "./component/Carousel";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import Features from "./component/Features";
import Action from "./component/Action";
import Team from "./component/Team";
import Appointment from "./component/Appointment";
import Footer from "./component/Footer";
import BackToTop from "./component/BackToTop";
import "./css/style.css"
import "./css/style.min.css"
class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <About></About>
        <Services></Services>
        <Appointment></Appointment>
        <Features></Features>
        <Action></Action>
        <Team></Team>
        <Testimonial></Testimonial>
        <Footer></Footer>
        <BackToTop></BackToTop>
      </>
    );
  }
}

export default App;
