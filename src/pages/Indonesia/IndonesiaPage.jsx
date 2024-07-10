import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import GelobalSection from "../../components/GelobalSection/GelobalSection";
import ProvinsiTable from '../../components/ProvinsiTable/ProvinsiTable';
import { setProvinces } from '../../slices/provincesSlice';

function IndonesiaPage() {
    const dispatch = useDispatch();
    const objProvinsi = useSelector((state) => state.provinces.list);

    return (
        <div>
            <Navbar/>
            <Hero />
            <GelobalSection situation="indonesia"/>
            <ProvinsiTable objProvinsi={objProvinsi}/>
            <Footer />
        </div>
    );
}

export default IndonesiaPage;
