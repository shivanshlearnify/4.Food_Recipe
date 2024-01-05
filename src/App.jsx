import { useState } from "react";
import "./App.css";
import { getFoodData } from "./api";
import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import CusineItem from "./components/cusineItem/CusineItem";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const data = getFoodData("egg");

  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
