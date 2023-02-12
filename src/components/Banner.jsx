import "../index.scss";

function Banner(props) {
  let bannerClassList = "banner";
  if (props.big === "true") {
    bannerClassList += " banner-big";
  }
  return (
    <section className={bannerClassList}>
      <img
        src={props.image}
        alt="Bannière"
        className="banner-background-image"
      />
      {props.text && <h1 className="hero">{props.text}</h1>}
    </section>
  );
}

export default Banner;
