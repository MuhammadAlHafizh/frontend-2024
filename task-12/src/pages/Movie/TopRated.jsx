import Layout from "../../Layout";
import Hero from "../../components/Hero/Hero"
import Movies from "../../components/Movies/Movies"
import data from "../../utils/constants/data";
import { useState } from "react";

function TopRatedMovie(){
    const [movies,setMovies] = useState(data)
    return(
        <>
            <Layout>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} title={`Top Rated Movies`}/>
            </Layout>
        </>
    )
}

export default TopRatedMovie
