import "./Card.css";

function Card({ x }) {
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
          <input type="range" value={x.data_value} />
        ) : x.data_type === "text" ? (
          <p>{x.data_value}</p>
        ) : (
          <input type={x.data_type} value={x.data_value} />
        ))}
      <div>{x.card_title}</div>
      {x.button && (
        <a href={x.redirect}>
          <button>{x.button_name}</button>
        </a>
      )}
      {x.link && <a href={x.redirect}>{x.link_name}</a>}
    </div>
  );
}
export default Card;
