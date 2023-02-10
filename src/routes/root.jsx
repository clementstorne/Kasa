import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import banner from "../assets/banner.jpg";

export default function Root() {
  return (
    <>
      <Header />
      <Banner image={banner} text="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </>
  );
}
