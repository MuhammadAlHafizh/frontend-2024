// import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import GelobalSection from "../../components/GelobalSection/GelobalSection";

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero />
        <GelobalSection />
        <Footer />
    </div>
  );
}

export default HomePage;
