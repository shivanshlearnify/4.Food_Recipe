import { useState } from "react";
import "./App.css";
import { getFoodData } from "./api";
import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import CusineItem from "./components/cusineItem/CusineItem";

function App() {
  const data = getFoodData("egg");

  return (
    <div>
    <Header/>
    <HeroBanner/>
    <CusineItem/>
    </div>
  );
}

export default App;
