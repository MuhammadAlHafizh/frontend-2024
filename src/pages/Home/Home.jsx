import { useState } from "react";
// import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import GelobalSection from "../../components/GelobalSection/GelobalSection";
import ProvinsiTable from '../../components/ProvinsiTable/ProvinsiTable';
import data from "../../utils/constants/provinces";

function HomePage() {
    const [objProvinsi, setProvinsi] = useState(data.provinces);
  return (
    <div>
        <Navbar/>
        <Hero />
        <GelobalSection />
        <ProvinsiTable objProvinsi={objProvinsi} setProvinsi={setProvinsi}/>
        <Footer />
    </div>
  );
}

export default HomePage;
