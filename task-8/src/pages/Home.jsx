import React, { useState } from 'react';
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import data from "../utils/constans/data";

function Home(){
    const [movies, setMovies] = useState(data);
    return(
        <div>
            <Navbar />
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <Form movies={movies} setMovies={setMovies} />
            <Footer />
        </div>
    );
}

export default Home;
