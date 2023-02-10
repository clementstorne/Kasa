import "../index.scss";

function Banner(props) {
  return (
    <section className="banner">
      <img
        src={props.image}
        alt="Bannière"
        className="banner-background-image"
      />
      <h1 className="hero">{props.text}</h1>
    </section>
  );
}

export default Banner;
