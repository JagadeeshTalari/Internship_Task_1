// import logo from "./logo.svg";
import "./App.css";
import { bannerArray } from "./utility/data";
// import Card from "./Components/Card";
import Banner from "./Components/Banner";
import { BrowserRouter } from "react-router-dom";
import Section from "./Components/Section";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("white");

  const a = theme === "white" ? "#212121" : "white";
  return (
    <div className="App" style={{ backgroundColor: theme, color: a }}>
      {/* Theme Changer */}
      <button
        onClick={() => {
          theme === "white" ? setTheme("#212121") : setTheme("white");
        }}
      >
        Theme Changer
      </button>
      <BrowserRouter>
        {/* Banners */}
        <div className="AllBanners">
          {bannerArray.map((x) => {
            return <Banner key={x.id_no} x={x}></Banner>;
          })}
        </div>
        {/* Sections - with Cards */}
        <Section />
      </BrowserRouter>
    </div>
  );
}

export default App;
