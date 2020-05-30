import React, {useState} from "react";
import ProductNav from "./components/Nav/ProductNav/ProductNav";
import MainNav from "./components/Nav/MainNav/MainNav";
import Hero from "./components/Landingpage/Hero/Hero";
import MediaSlider from "./components/Landingpage/MediaSlider/MediaSlider";
import DesktopLibrary from "./components/Landingpage/DesktopLibrary/DesktopLibrary";
import Equipment from "./components/Landingpage/Equipment/Equipment";
import Footer from "./components/Footer/Footer/Footer";

function App(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div className="App">
      <ProductNav language={language} />
      <MainNav language={language} />
      <Hero language={language} />
      <MediaSlider language={language} />
      <DesktopLibrary language={language} />
      <Equipment language={language} />
      <Footer
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
