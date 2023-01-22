import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Nav from "./components/head";
import NavBar from "./components/nav";
import Slider from "./components/slider";
import Courses from "./components/courses";
import Person from "./components/person";


export default function App() {
  var title;
  var loggedIn = false;
  loggedIn = sessionStorage.getItem("token");
  if (loggedIn) {
    title = "Logout";
  }
  else {
    title = "Login";
  }
  return (
    <BrowserRouter>
    <Nav Title={title} />
      <NavBar Title={title} /><br></br>
      <Slider/>
      <br></br><br></br><br></br>
      <Person />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Courses />
     
    </BrowserRouter>
  );
}