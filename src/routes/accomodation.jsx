import { redirect } from "react-router-dom";

import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Host from "../components/Host";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import data from "../data/logements.json";

export default function Accomodation() {
  const accomodationId = window.location.pathname.split("accomodation/")[1];

  const accomodationData = data.filter(
    (accomodation) => accomodation.id === accomodationId
  )[0];

  if (!accomodationData) {
    // return redirect("/error");
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  const host = accomodationData.host;

  const equipments = accomodationData.equipments.map((item) => (
    <span key={item}>
      {item} <br />
    </span>
  ));

  const tags = accomodationData.tags.map((item, index) => (
    <Tag key={index} content={item} />
  ));

  return (
    <>
      <Header />

      <Slideshow
        title={accomodationData.title}
        images={accomodationData.pictures}
      />

      <section>
        <header className="accomodation-header">
          <div className="accomodation-title-and-tags">
            <div>
              <h1 className="accomodation-title">{accomodationData.title}</h1>
              <h2 className="accomodation-location">
                {accomodationData.location}
              </h2>
            </div>
            <div className="tag-list">{tags}</div>
          </div>
          <div className="accomodation-host-and-rating">
            <Host name={host.name} picture={host.picture} />
            <Rating rating={accomodationData.rating} />
          </div>
        </header>

        <div className="dropdown-accomodation-container">
          <Dropdown
            title="Description"
            content={accomodationData.description}
            type="accomodation"
          />

          <Dropdown
            title="Équipements"
            content={equipments}
            type="accomodation"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
