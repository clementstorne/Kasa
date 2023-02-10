import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import banner from "../assets/banner.jpg";

export default function Root() {
  return (
    <div>
      <Header />
      <Banner image={banner} text="Chez vous, partout et ailleurs" />
      <Footer />
    </div>
  );
}
