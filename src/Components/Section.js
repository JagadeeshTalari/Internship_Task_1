import { useState } from "react";
import { CardArray, sectionArray } from "../utility/data";
import Card from "./Card";
import "./Section.css";

function Section() {
  const [cardsState, setCardsState] = useState([false, false, false]);

  console.log(cardsState);

  function handleIncrementClick(index) {
    const nextCardsState = cardsState.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return !c;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCardsState(nextCardsState);
  }

  return (
    <>
      <div className="sectionsParent">
        {sectionArray.map((sec, i) => {
          return (
            <div className="SingleSectionParent" key={i}>
              <div>
                <h2>{sec.title}</h2>
                <button
                  onClick={() => {
                    handleIncrementClick(sec.sec_no - 1);
                  }}
                >
                  {!cardsState[sec.sec_no - 1] ? `See All` : `See Less`}
                </button>
              </div>
              {cardsState[sec.sec_no - 1] ? (
                <section
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "flex-start",
                    maxWidth: "1000px",
                    margin: "auto",
                    // minWidth: "50%",
                    height: "auto",
                  }}
                >
                  {CardArray.filter((cardObj) => {
                    return cardObj.parent_sec_no === sec.sec_no;
                  }).map((x) => {
                    return (
                      <div>
                        <Card key={x.id} x={x}></Card>
                      </div>
                    );
                  })}
                </section>
              ) : (
                <section
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    maxWidth: "1000px",
                    margin: "auto",
                    gap: "2rem",
                    height: "auto",
                  }}
                >
                  {CardArray.filter((cardObj) => {
                    return cardObj.parent_sec_no === sec.sec_no;
                  })
                    .map((x) => {
                      return (
                        <div key={x.id}>
                          <Card key={x.id} x={x}></Card>
                        </div>
                      );
                    })
                    .slice(0, 3)}
                </section>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Section;

// [
//   cardArray --> cardObj * 17

//   forEach ==> sec
// ]
