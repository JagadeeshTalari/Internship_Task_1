import { useState } from "react";
import "./Card.css";

function Card({ x }) {
  const [inputValue, setInputValue] = useState(x.data_value);
  return (
    <div className="Card">
      <div>{x.id}</div>

      {x.data &&
        (x.data_type === "image" ? ( //if Image
          <img src={x.data_value} alt="" />
        ) : x.data_type === "progress" ? ( //if progress
          <input
            type="range"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ) : x.data_type === "text" ? ( //if text -para
          <p>{x.data_value}</p>
        ) : x.data_type === "tags" ? (
          <div className="TagsParent">
            {x.data_value.map((dvalue) => {
              return (
                <>
                  {dvalue.split(", ").map((v) => {
                    return <div className="tags">{v}</div>;
                  })}
                </>
              );
            })}
          </div> //if input tags
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
