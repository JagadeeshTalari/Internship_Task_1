import { useState } from "react";
import "./Card.css";

function Card({ x }) {
  const [inputValue, setInputValue] = useState(x.data_value);
  return (
    <div className="Card">
      <div>{x.id}</div>

      {/* <div>{x.data}</div> */}
      {/* <div>{x.data_type}</div> */}
      {/* <div>{x.data_value}</div> */}
      {x.data &&
        (x.data_type === "image" ? (
          <img src={x.data_value} alt="" />
        ) : x.data_type === "progress" ? (
          <input
            type="range"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ) : x.data_type === "text" ? (
          <p>{x.data_value}</p>
        ) : (
          <input
            type={x.data_type}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ))}
      <h4>{x.card_title}</h4>
      {x.button && (
        <a href={x.redirect}>
          <button>{x.button_name}</button>
        </a>
      )}
      {x.link && <a href={x.redirect}>{x.link_name}</a>}
      {x.note}
    </div>
  );
}
export default Card;
