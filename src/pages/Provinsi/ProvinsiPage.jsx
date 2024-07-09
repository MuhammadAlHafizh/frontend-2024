import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import ProvinsiTable from '../../components/ProvinsiTable/ProvinsiTable';
import FormCovid from "../../components/FormCovid/FormCovid";
import data from "../../utils/constants/provinces";

function ProvinsiPage() {
    const [objProvinsi, setProvinsi] = useState(data.provinces);
    return (
        <div>
            <Navbar/>
            <Hero />
            <ProvinsiTable objProvinsi={objProvinsi} setProvinsi={setProvinsi}/>
            <FormCovid objProvinsi={objProvinsi} setProvinsi={setProvinsi}/>
            <Footer />
        </div>
    );
}

export default ProvinsiPage;
