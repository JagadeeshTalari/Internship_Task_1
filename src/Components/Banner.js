import { Link } from "react-router-dom";

function Banner({ x }) {
  return (
    <div>
      <div>{x.id}</div>
      <div>{x.text}</div>

      {x.button && (
        <Link to={x.link}>
          <button>{x.btn_name}</button>
        </Link>
      )}
    </div>
  );
}
export default Banner;
