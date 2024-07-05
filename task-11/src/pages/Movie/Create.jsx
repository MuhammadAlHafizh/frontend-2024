import { useState } from "react"
import Form from "../../components/Form/Form"
import Hero from "../../components/Hero/Hero"
import Movies from "../../components/Movies/Movies"
import Layout from "../../Layout"
import data from "../../utils/constants/data";

function CreateMovie(){
    const [movies,setMovies] = useState(data)
    return(
        <>
        <Layout>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} title={`All Movies`}/>
            <Form movies={movies} setMovies={setMovies}/>
        </Layout>
        </>
    )
}

export default CreateMovie
