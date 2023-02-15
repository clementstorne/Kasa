import "../index.scss";
import data from "../data/logements.json";

import Card from "./Card";

function Gallery() {
  const accomodationsCards = data.map((accomodation) => (
    <Card
      key={accomodation.id}
      id={accomodation.id}
      title={accomodation.title}
      image={accomodation.cover}
    />
  ));
  return <section className="gallery">{accomodationsCards}</section>;
}

export default Gallery;
