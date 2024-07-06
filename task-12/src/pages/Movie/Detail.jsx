import Movies from "../../components/Movies/Movies"
import Navbar from "../../components/Navbar/Navbar";
import DetailMovie from "../../components/Movie/DetailMovie";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    // Create movies state
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // Fetch Detail recommendation movies
        const API_KEY = import.meta.env.VITE_API_KEY;

        async function getDetail() {
            const response = await axios('https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key='+API_KEY);
            // Update movies state
            setMovies(response.data.results);
        }

        getDetail();
    }, [id]);
    return (

        <>
            <Navbar />
            <DetailMovie />
            <Movies movies={movies} />
            <Footer />
        </>
    );
}

export default Detail;
