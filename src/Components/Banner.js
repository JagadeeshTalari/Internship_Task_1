import { Link } from "react-router-dom";

import "./Banner.css";

function Banner({ x }) {
  return (
    <div className="BannerParent">
      <div className="Banner">
        <h2>{x.id.toUpperCase()}</h2>
        <div>{x.text}</div>
      </div>
      {x.button && (
        <Link to={x.link}>
          <button>{x.btn_name}</button>
        </Link>
      )}
    </div>
  );
}
export default Banner;
