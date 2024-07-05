import Layout from "../../Layout";
import Hero from "../../components/Hero/Hero"
import Movies from "../../components/Movies/Movies"
import data from "../../utils/constants/data";
import { useState } from "react";

function NowPlayingMovie(){
    const [movies,setMovies] = useState(data)
    return(
        <>
            <Layout>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} title={`Now Playing Moviess`}/>
            </Layout>
        </>
    )
}

export default NowPlayingMovie