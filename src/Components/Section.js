import { useState } from "react";
import { CardArray } from "../utility/data";
import Card from "./Card";

const Sec1Array = CardArray.filter((cardObj) => {
  return cardObj.parent_sec === "section1";
});
const Sec2Array = CardArray.filter((cardObj) => {
  return cardObj.parent_sec === "section2";
});
const Sec3Array = CardArray.filter((cardObj) => {
  return cardObj.parent_sec === "section3";
});

function Section() {
  const [cardsState, setCardsState] = useState(false);
  const [cardsState2, setCardsState2] = useState(false);
  return (
    <div>
      <div className="section1" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* <div>{x.title}</div> */}
        <div>Section1</div>
        {Sec1Array.map((x) => {
          return <Card key={x.id} x={x}></Card>;
        })}
      </div>
      <div className="section2" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* <div>{x.title}</div> */}
        <div>Section2</div>
        <div
          onClick={() => {
            setCardsState(!cardsState);
          }}
          style={{ fontSize: "30px" }}
        >
          {cardsState ? `See All` : `See Less`}
        </div>
        {cardsState
          ? Sec2Array.map((x) => {
              return <Card key={x.id} x={x}></Card>;
            }).slice(0, 3)
          : Sec2Array.map((x) => {
              return <Card key={x.id} x={x}></Card>;
            })}
      </div>
      <div className="section3" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* <div>{x.title}</div> */}
        <div>Section3</div>
        <div
          onClick={() => {
            setCardsState2(!cardsState2);
          }}
          style={{ fontSize: "30px" }}
        >
          {cardsState2 ? `See All` : `See Less`}
        </div>
        {cardsState2
          ? Sec3Array.map((x) => {
              return <Card key={x.id} x={x}></Card>;
            }).slice(0, 3)
          : Sec3Array.map((x) => {
              return <Card key={x.id} x={x}></Card>;
            })}
      </div>
    </div>
  );
}
export default Section;
