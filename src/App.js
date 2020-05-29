import React from "react";
import ProductNav from "./components/Nav/ProductNav/ProductNav";
import MainNav from "./components/Nav/MainNav/MainNav";
import Hero from "./components/Landingpage/Hero/Hero";
import MediaSlider from "./components/Landingpage/MediaSlider/MediaSlider";
import DesktopLibrary from "./components/Landingpage/DesktopLibrary/DesktopLibrary";

function App() {
  return (
    <div>
      <ProductNav />
      <MainNav />
      <Hero />
      <MediaSlider />
      <DesktopLibrary />
    </div>
  );
}

export default App;
