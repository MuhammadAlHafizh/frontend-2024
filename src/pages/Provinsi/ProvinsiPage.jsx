import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import ProvinsiTable from '../../components/ProvinsiTable/ProvinsiTable';
import FormCovid from "../../components/FormCovid/FormCovid";
import { setProvinces } from '../../slices/provincesSlice';

function ProvinsiPage() {
    const dispatch = useDispatch();
    const objProvinsi = useSelector((state) => state.provinces.list);

    return (
        <div>
            <Navbar/>
            <Hero />
            <ProvinsiTable objProvinsi={objProvinsi}/>
            <FormCovid objProvinsi={objProvinsi} setProvinsi={(data) => dispatch(setProvinces(data))} />
            <Footer />
        </div>
    );
}

export default ProvinsiPage;
