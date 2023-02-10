import "../index.scss";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/accomodation/${props.id}`}>
      <div className="thumb">
        <img
          src={props.image}
          alt={props.title}
          className="thumb-background-image"
        />
        <div className="thumb-gradient"></div>
        <h2 className="thumb-title">{props.title}</h2>
      </div>
    </Link>
  );
}

export default Card;
