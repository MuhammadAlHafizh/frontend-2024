import Layout from "../../Layout";
import Hero from "../../components/Hero/Hero"
import Movies from "../../components/Movies/Movies"
import data from "../../utils/constants/data";
import { useState } from "react";

function PopularMovie(){
    const [movies,setMovies] = useState(data)
    return(
        <>
            <Layout>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} title={`Popular Movies`}/>
            </Layout>
        </>
    )
}

export default PopularMovie