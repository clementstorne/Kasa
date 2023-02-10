import "../index.scss";

function Card(props) {
  return (
    <div className="thumb">
      {props.image ? (
        <img
          src={props.image}
          alt={props.title}
          className="thumb-background-image"
        />
      ) : (
        <div className="thumb-background"></div>
      )}
      <div className="thumb-gradient"></div>
      <h2 className="thumb-title">{props.title}</h2>
    </div>
  );
}

export default Card;
