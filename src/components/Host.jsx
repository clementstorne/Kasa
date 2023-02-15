import "../index.scss";

function Host(props) {
  const name = props.name.split(" ");
  return (
    <div className="host">
      <p className="host-name">
        {name[0]}
        <br />
        {name[1]}
      </p>
      <img className="host-picture" src={props.picture} alt={props.name} />
    </div>
  );
}

export default Host;
