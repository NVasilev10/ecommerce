import Annoucement from "../components/Annoucment/Annoucement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import Testimonials from "../components/Testimonials/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Annoucement />
      <Slider />
      <Categories />
      <Products />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
