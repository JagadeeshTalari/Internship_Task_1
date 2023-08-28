// import logo from "./logo.svg";
import "./App.css";
import { bannerArray, sectionArray, CardArray } from "./utility/data";
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import { BrowserRouter } from "react-router-dom";
import Section from "./Components/Section";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {bannerArray.map((x) => {
          return <Banner key={x.id_no} x={x}></Banner>;
        })}

        {/* {sectionArray.map((x) => {
          return <Section key={x.sec_no} x={x}></Section>;
        })} */}
        <Section />

        {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
          {CardArray.map((x) => {
            return <Card key={x.id} x={x}></Card>;
          })}
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
