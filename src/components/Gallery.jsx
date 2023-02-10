import "../index.scss";
import accomodations from "../data/logements.json";

import Card from "./Card";

function Gallery() {
  const accomodationsList = accomodations.map((accomodation) => (
    <Card
      key={accomodation.id}
      id={accomodation.id}
      title={accomodation.title}
      image={accomodation.cover}
    />
  ));
  return <section className="gallery">{accomodationsList}</section>;
}

export default Gallery;
